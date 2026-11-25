"""Generate the local browser bundle from the shared content file."""

from argparse import ArgumentParser
from pathlib import Path
import json


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="verify the bundle matches catalog.json")
    args = parser.parse_args()

    folder = Path(__file__).resolve().parent
    catalog = json.loads((folder / "catalog.json").read_text(encoding="utf-8"))
    audit = json.loads((folder / "source-audit.json").read_text(encoding="utf-8"))
    approved = {item["id"]: item for item in audit["sources"]}
    reuse_statuses = {
        "adapt": "adaptation-permitted",
        "noncommercial": "noncommercial-adaptation-permitted",
    }
    for source_id, source in catalog["sources"].items():
        if source.get("scope") != "asd" or not source.get("scopeEvidence"):
            parser.error(f"{source_id} needs verified ASD-specific scope evidence.")
        reviewed = approved.get(source.get("auditId"), {})
        expected_reuse = reuse_statuses.get(reviewed.get("decision"))
        if (expected_reuse is None
                or source.get("reuseStatus") != expected_reuse
                or not source.get("permissionEvidence")
                or source.get("url") != reviewed.get("url")):
            parser.error(f"{source_id} needs a verified adaptation licence for this exact source.")
        if reviewed.get("decision") == "noncommercial" and (
                not reviewed.get("license")
                or source.get("license") != reviewed["license"]
                or not source.get("licenseName")
                or not source.get("rights")
                or not source.get("attribution")):
            parser.error(f"{source_id} needs the audited noncommercial licence and attribution.")
        if (source.get("currencyStatus") != "usable"
                or not source.get("reviewScope")
                or not source.get("reviewChecked")):
            parser.error(f"{source_id} needs a completed review for the cited scope.")
    article_ids = {article["id"] for article in catalog["articles"]}
    situation_ids = {situation["id"] for situation in catalog["situations"]}
    resource_group_ids = {group["id"] for group in catalog["resourceGroups"]}
    if len(resource_group_ids) != len(catalog["resourceGroups"]):
        parser.error("Resource groups need distinct IDs.")
    for article in catalog["articles"]:
        if not article.get("ages"):
            parser.error(f"{article['id']} must have at least one age group in catalog.json.")
        if not article.get("ageBasis") or not article.get("ageNote"):
            parser.error(f"{article['id']} needs an explicit basis for its age labels.")
        if article.get("related") not in catalog["sources"] or not article.get("reviewScope"):
            parser.error(f"{article['id']} needs an ASD-specific source and support focus.")
        if not article.get("sections") or any(
            not section.get("heading")
            or not (section.get("paragraphs") or section.get("list", {}).get("items"))
            for section in article["sections"]
        ):
            parser.error(f"{article['id']} needs headed, nonempty article sections.")
        related = article.get("relatedArticles", [])
        summary_link = article.get("summaryLink")
        if summary_link:
            if not summary_link.get("label"):
                parser.error(f"{article['id']} needs a label for its summary link.")
            related = [*related, summary_link.get("articleId")]
        if not set(related) <= article_ids - {article["id"]} or len(set(related)) != len(related):
            parser.error(f"{article['id']} needs distinct related article links.")
        cited = {article["related"]}
        for reference in article.get("additionalSources", []):
            source_id = reference.get("id")
            if source_id not in catalog["sources"] or source_id in cited or not reference.get("section"):
                parser.error(f"{article['id']} needs a distinct approved source and citation scope for each additional reference.")
            cited.add(source_id)
        resource = article.get("resource")
        if resource is not None:
            if resource.get("group") not in resource_group_ids:
                parser.error(f"{article['id']} needs a known resource group.")
            interests = resource.get("interests", [])
            if not interests or not set(interests) <= situation_ids:
                parser.error(f"{article['id']} needs known resource interests.")
            official = resource.get("officialSources", [])
            if not official or not set(official) <= cited:
                parser.error(f"{article['id']} needs official links drawn from its cited sources.")
            if not all(resource.get(field) for field in ("audience", "contact")) or not article.get("reviewChecked"):
                parser.error(f"{article['id']} needs a resource audience, contact and review date.")
    path = folder / "guide.js"
    content = (
        "// Generated from catalog.json by build-content.py.\n"
        "const { categories, resourceGroups, situations, sources, articles, withdrawnArticles } = "
        + json.dumps(catalog, ensure_ascii=False, indent=2)
        + ";\n"
    )
    if args.check:
        if not path.exists() or path.read_text(encoding="utf-8") != content:
            parser.exit(1, "guide.js is outdated. Run python3 build-content.py.\n")
    else:
        path.write_text(content, encoding="utf-8")


if __name__ == "__main__":
    main()

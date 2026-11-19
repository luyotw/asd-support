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
    for source_id, source in catalog["sources"].items():
        if source.get("scope") != "asd" or not source.get("scopeEvidence"):
            parser.error(f"{source_id} needs verified ASD-specific scope evidence.")
    for article in catalog["articles"]:
        if not article.get("ages"):
            parser.error(f"{article['id']} must have at least one age group in catalog.json.")
        if article.get("related") not in catalog["sources"] or not article.get("asdFocus"):
            parser.error(f"{article['id']} needs an ASD-specific source and support focus.")
    path = folder / "guide.js"
    content = (
        "// Generated from catalog.json by build-content.py.\n"
        "const { categories, situations, sources, articles, withdrawnArticles } = "
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

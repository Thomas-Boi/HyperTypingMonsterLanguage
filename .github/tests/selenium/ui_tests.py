from argparse import ArgumentParser

from build_assets.SeleniumRunner import SeleniumRunner
from build_assets.PathResolverAction import PathResolverAction

def main():
  parser = ArgumentParser(description="Run Selenium Tests")
  parser.add_argument("geckodriver_path",
                      help="The path to the firefox executable file",
                      action=PathResolverAction)
  parser.add_argument("screenshot_path",
                      help="The path to the screenshot folder",
                      action=PathResolverAction)
  args = parser.parse_args()
  runner = SeleniumRunner(args.geckodriver_path, args.screenshot_path)
  runner.run()

if __name__ == "__main__":
    main()
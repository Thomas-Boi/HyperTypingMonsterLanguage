import argparse
from pathlib import Path


class PathResolverAction(argparse.Action):
    def __call__(self, parser, namespace, values, option_string=None):
        path = Path(values).resolve()
        setattr(namespace, self.dest, str(path))

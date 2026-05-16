# Unirate SDK utility: make_context

from core.context import UnirateContext


def make_context_util(ctxmap, basectx):
    return UnirateContext(ctxmap, basectx)

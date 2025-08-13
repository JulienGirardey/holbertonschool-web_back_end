#!/usr/bin/env python3
"""
this file contains the function list_all(mongo_collection)
"""


def list_all(mongo_collection):
    """
    that lists all document in the collection
    """
    if mongo_collection is None:
        return []
    else:
        return list(mongo_collection.find())

#!/usr/bin/env python3
"""
this file contains the function insert_school
"""


def insert_school(mongo_collection, **kwargs):
    """
    that inserts a new document in a collection based on kwargs
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id

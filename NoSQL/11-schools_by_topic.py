#!/usr/bin/env python3
"""
this file contains the function schools_by_topic
"""


def schools_by_topic(mongo_collection, topic):
    """
    that returns the list of school having a specific topic
    """
    result = mongo_collection.find({"topics": topic})
    school_list = [name for name in result if topic in name.get('topics', [])]
    return school_list

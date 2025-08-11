#!/usr/bin/env python3
"""
this file contains a function index_range
that takes two integer
arguments page and page_size
"""


def index_range(page, page_size):
    """
    that return a tuple of 2 int
    they represents the range of
    indexes to return
    """
    return ((page - 1) * page_size, (page - 1) * page_size + page_size)

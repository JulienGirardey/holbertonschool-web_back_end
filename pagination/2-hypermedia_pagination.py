#!/usr/bin/env python3
"""
this file contains the Server class
"""
import csv
import math
from typing import List
index_range = __import__('0-simple_helper_function').index_range


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        return the appropriate page
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start, end = index_range(page, page_size)
        dataset = self.dataset()

        if start < len(dataset) or end > len(dataset):
            return dataset[start:end]
        return []

    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        """
        that returns a dictionary
        """
        data = self.dataset()
        if len(data) >= page:
            next_page = page + 1
        else:
            next_page = None
        if page >= len(data):
            prev_page = page - 1
        else:
            prev_page = None
        return {
            "page_size": page_size,
            "page": page,
            "data": self.get_page(page, page_size),
            "next_page": next_page,
            "prev_page": prev_page,
            "total_page": math.ceil(len(data) / page_size)
        }

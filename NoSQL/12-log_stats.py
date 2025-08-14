#!/usr/bin/env python3
"""
this file is a program, that provides some
stats about Nginx logs stored in MongoDB
"""
from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    stats = client.logs.nginx

    nb_documents = stats.estimated_document_count()
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    print("{} logs".format(nb_documents))
    print("Methods:")
    for method in methods:
        count = stats.count_documents({'method': method})
        print("    method {}: {}".format(method, count))

    status_check = stats.count_documents({'method': 'GET', 'path': '/status'})
    print("{} status check".format(status_check))

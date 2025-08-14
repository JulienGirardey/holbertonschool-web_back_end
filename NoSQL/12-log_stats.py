#!/usr/bin/env python3
"""
this file is a programe, that provides some
stats about Nginx logs stored in MongoDB
"""
from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    stats = client.logs.nginx

    nb_documents = stats.estimated_document_count()
    method = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    print(nb_documents, " logs")
    print("methods:")
    count = 0
    for i in method:
        school = stats.count_documents({'method': i})
        count += school
        print("\tmethod {}: {}".format(i, school))
    print("{} status check".format(stats.count_documents({'path': '/status'})))

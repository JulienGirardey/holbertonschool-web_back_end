#!/usr/bin/env python3
"""
this file is a programe, that provides some
stats about Nginx logs stored in MongoDB
"""
from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    mydb = client["logs"]
    mycol = mydb["nginx"]

    nb_documents = mycol.estimated_document_count()
    method = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    print(nb_documents, " logs")
    print("Methods:")
    count = 0
    for i in method:
        school = mycol.count_documents({'method': i})
        count += school
        print("    method {}: {}".format(i, school))
    print("{} status check".format(mycol.count_documents({'path': '/status'})))

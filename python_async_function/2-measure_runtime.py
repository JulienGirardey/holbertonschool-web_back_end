#!/usr/bin/env python3
"""
Create a measure_time function with integers n and max_delay
as arguments that measures the total execution time for
wait_n(n, max_delay), and returns total_time / n. Your
function should return a float.
"""
wait_n = __import__('1-concurrent_coroutines').wait_n
import time

def measure_time(n, max_delay):
    wait_n(n, max_delay)
    return time.time() % n

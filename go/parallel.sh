#!/bin/bash

# Replace with the appropriate number of rows
total_rows=10

# Run Go program in parallel for each row
seq $total_rows | parallel --eta go run main.go

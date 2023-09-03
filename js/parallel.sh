#!/bin/bash

# Replace with the appropriate number of rows
total_rows=25000
limit=1000
offset=0 

# Run node js program in parallel for each row
seq 0 $limit $total_rows | parallel --jobs 4 --shuf --progress --results out.csv -n1 node parallel.js $limit {}


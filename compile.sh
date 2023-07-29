#!/bin/bash


# Dependencies
PROTOC_GEN_TS_PATH="node_modules/.bin/protoc-gen-ts"

# GRAPHS
GRAPH_VERSION="v1"
GRAPH_DIR="graph"

# Compile GO definition
protoc --go_out=${GRAPH_DIR}/${GRAPH_VERSION}/go ${GRAPH_DIR}/${GRAPH_VERSION}/spec.proto

# Compile PYTHON definition
protoc --python_out=${GRAPH_DIR}/${GRAPH_VERSION}/python ${GRAPH_DIR}/${GRAPH_VERSION}/spec.proto

# Compile TS definition
protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --ts_opt=esModuleInterop=true \
    --js_out="import_style=commonjs,binary:${GRAPH_DIR}/${GRAPH_VERSION}/typescript" \
    --ts_out=${GRAPH_DIR}/${GRAPH_VERSION}/typescript \
    ${GRAPH_DIR}/${GRAPH_VERSION}/spec.proto




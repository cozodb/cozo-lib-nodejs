#!/usr/bin/env bash

rm -fr native
mkdir -p native/6
cross build --target=x86_64-unknown-linux-gnu --release
mv target/release/libcozo_node.so native/6/index.node
yarn package

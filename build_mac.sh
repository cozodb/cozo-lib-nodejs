#!/usr/bin/env bash

rm -fr native
mkdir -p native/6
cargo build --release
mv target/release/libcozo_nodejs.dylib native/6/index.node
yarn package

#!/bin/bash


########################
# Print to STDERR
# Arguments:
#   Message to print
# Returns:
#   None
#########################
stderr_print() {
    # 'is_boolean_yes' is defined in libvalidations.sh, but depends on this file so we cannot source it
    local bool="${BITNAMI_QUIET:-false}"
    # comparison is performed without regard to the case of alphabetic characters
    shopt -s nocasematch
    if ! [[ "$bool" = 1 || "$bool" =~ ^(yes|true)$ ]]; then
        printf "%b\\n" "${*}" >&2
    fi
}

info_print() {
    echo -e "\033[32;1m$*\033[0m"
}

SAVE_NAME=all_images
CACHE_FILE="${CACHE_FROM_DIR}/${SAVE_NAME}.tar"
BUILD_TAG=camin/docs:latest
mkdir -p output

# load_cache ${SAVE_NAME}
docker build --target build-stage \
    --tag ${BUILD_TAG}  \
    --cache-from type=local,src=${CACHE_FILE} \
    --cache-to type=local,mode=max,dest=${CACHE_FILE} \
    --progress=plain .
docker build --output output .
info_print "rename to output/${GITHUB_SHA}.pdf"
mv output/book.pdf "output/${GITHUB_SHA}.pdf"
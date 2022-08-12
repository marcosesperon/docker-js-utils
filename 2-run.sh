docker run -d \
        --name js-utils \
        --cap-add=SYS_NICE \
        --cap-add=DAC_READ_SEARCH \
        --restart unless-stopped \
        -p 3000:3000 \
        js-utils
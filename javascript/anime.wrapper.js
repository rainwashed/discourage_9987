function async_anime(props) {
    return new Promise((res, _) => {
        anime({
            ...props,
            complete: res
        })
    });
}
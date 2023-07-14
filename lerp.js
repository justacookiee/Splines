function lerpfn(x0, y0, x1, y1, t) {
    let x = (1 - t) * x0 + t * x1;
    let y = (1 - t) * y0 + t * y1;
    return {x, y};
}
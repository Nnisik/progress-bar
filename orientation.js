window.onload = () => {
    const bodyObject = document.querySelector(body);
    const pageWidth = bodyObject.offsetWidth;
    const pageHeight = bodyObject.offsetHeight;
    if (pageHeight > pageWidth) {
        bodyObject.style.flexDirection = "column";
    }
    else {
        bodyObject.style.flexDirection = "row";
    }
}
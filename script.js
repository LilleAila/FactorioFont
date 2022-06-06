const files = "F A C T O R I O2".split(" ")

// Initialize
for (let i = 0; i < files.length; i++) {
    u(".input").append(
        u("<img />")
            .attr("src", `./assets/${files[i]}.png`)
            .addClass("inputImg")
            .attr("id", `img-${i}`)
    )
}

u(".inputImg").on("click", e => {
    u(".output").append(
        u("<img />")
            .attr("src", e.target.src)
            .addClass("outputImg")
            .on("click", e => u(e.target).remove())
    );
});

u(".reset").on("click", () => {
    u(".output").html("");
});

u(".export").on("click", () => {
    html2canvas(document.querySelector(".output"), { backgroundColor: "rgba(0, 0, 0, 0)" }).then(canvas => {
        u(".outputImage").attr("src", canvas.toDataURL("image/png"))
    });
});
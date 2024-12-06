const content = [
    {
        program: "Pembuatan sarang konvensional burung jalak bali dan kura-kura forsteni",
        anggaran: "Rp 35.451.000",
        link: "../pembuatan-sarang-konvensional-burung-jalak-bali-dan-kura-kura-forsten",
    },
    {
        program: "Kawasan konservasi dan ekowisata penyu sumingi Kabupeten Kepulauan Selayar",
        anggaran: "Rp 194.820.796",
        link: "../kawasan-konservasi-dan-ekowisata-penyu-sumingi-kabupaten-kepulauan-selayar",
    },
    {
        program: "Striped nipah river restoration",
        anggaran: "Rp 49.000.000",
        link: "../striped-nipah-river-restoration",
    },
    {
        program: "Program agroforesty kelompok tani hutan ujung bulu",
        anggaran: "Rp 93.359.370",
        link: "../program-agroforesty-kelompok-tani-hutan-ujung-bulu",
    },
    {
        program: "Penanaman pohon di area PLTD/G Tello",
        anggaran: "Rp 115.702.900",
        link: "../Penanaman pohon di area PLTD/G Tello",    
    }
]

const table = document.getElementById("table");

content.forEach((inner) => {
    const tdP = document.createElement("td");
    const tdA = document.createElement("td");
    const tr = document.createElement("tr");
    const link = document.createElement("a");
    table.appendChild(tr);
    tr.appendChild(tdP);
    tr.appendChild(tdA);
    tdP.appendChild(link);
    tdA.innerText = inner.anggaran;
    link.innerText = inner.program;
    link.href = inner.link;
    link.target = "_blank";
    link.style.color = "black";
    link.style.textDecoration = "none";
    tdA.style.minWidth = "150px";
})
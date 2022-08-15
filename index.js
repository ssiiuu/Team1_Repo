let data = [
  {
    id: "1",
    tenSP: "A",
    priceOld: "1800",
    priceNew: "1300",
    rating: "7",
    image:
      "https://lamdepwiki.com/wp-content/uploads/2019/07/kieu-vay-dam-xoe-cong-so.jpg",
  },
  {
    id: "2",
    tenSP: "C",
    priceOld: "1500",
    priceNew: "1000",
    rating: "5",
    image:
      "https://lamdepwiki.com/wp-content/uploads/2019/07/kieu-vay-dam-xoe-cong-so.jpg",
  },
  {
    id: "3",
    tenSP: "B",
    priceOld: "1200",
    priceNew: "800",
    rating: "3",
    image:
      "https://lamdepwiki.com/wp-content/uploads/2019/07/kieu-vay-dam-xoe-cong-so.jpg",
  },
];

let renderSp = (array) => {
  contentHTML = "";
  for (let index = 0; index < array.length; index++) {
    const sp = array[index];
    contentHTML += `
        <div class="col-4 item_sp">
            <div class="card bg-white" style="height: 80vh">
                <img
                style="width: 100%; height: 70%; object-fit: cover; border-radius:"6px"
                class="card-img-top"
                src=${sp.image}
                alt=${sp.tenSP}
                />
                <div class="card-body text-center">
                    <h3 class="">${sp.tenSP}</h3>
                    <div class="d-flex flex-wrap justify-content-center">
                        <div
                        class="text-white bg-success"
                        style="width: 35px; height: 25px; border-radius: 4px"
                        >
                        ${sp.rating}
                        </div>
                        <p class="text-secondary">14 Ratings & 3 Reviews</p>
                    </div>
                    <p class="display-4 font-weight-bold">
                    $${sp.priceNew}
                        <del style="font-size: 16px" class="text-secondary">
                        $${sp.priceOld}
                        </del>
                    </p>
                </div>
            </div>
            </div>
    `;
  }
  document.getElementById("renderDssp").innerHTML = contentHTML;
};

renderSp(data);
let dataSearch = [];

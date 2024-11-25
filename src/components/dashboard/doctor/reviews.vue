<template>
  <div class="container">
    <DataView :value="Search()" paginator :rows="row" layout="list">
      <template #header>
        <div class="flex justify-content-between">
          <h3 class="sp-title">Patients's Reviews</h3>
        </div>
        <div class="mt-2">
          <InputGroup>
            <InputGroupAddon
              class="border-primary bg-primary text-white border-end-0"
            >
              <i class="fas fa-search"></i>
            </InputGroupAddon>
            <FloatLabel variant="on">
              <InputText
                v-model="keyword"
                class="border-primary border-start-0"
              />
              <label>Search Patinet</label>
            </FloatLabel>
          </InputGroup>
          <Card class="border-color mt-2">
            <template #content>
              <h4>Overall Rating</h4>
              <div class="d-flex justify-content-between">
                <div class="col">
                  <h3 class="d-inline font-kanit me-1">{{ rating }}</h3>
                  <Rating
                    v-model="rating"
                    readonly
                    class="d-lg-inline d-md-inline d-block"
                  />
                </div>
                <div class="col">
                  <Tag
                    value="All Time Rating 01/01/2024 - Now"
                    severity="secondary"
                    icon="fas fa-calendar-day"
                    class="float-end"
                  />
                </div>
              </div>
            </template>
          </Card>
        </div>
      </template>
      <template #list="slotProps">
        <div class="row">
          <div
            class="col-12"
            v-for="(item, index) in slotProps.items"
            :key="index"
          >
            <Card class="border-color">
              <template #content>
                <div class="row d-flex align-items-center justify-content-end">
                  <div class="col-lg-1 col-md-1 col-12 text-center">
                    <img
                      :src="
                        `https://avatar.iran.liara.run/public/?username=` +
                        item.name
                      "
                      class="rounded"
                      width="100"
                      height="100"
                    />
                  </div>
                  <div
                    class="col-lg-2 col-md-2 col-12 flex-1 text-lg-start text-md-start text-center"
                  >
                    <small class="text-primary"
                      >#Apt00{{ item.index + 1 }}</small
                    >
                    <h5>{{ item.name }}</h5>
                    <div
                      class="d-flex justify-content-center justify-content-lg-start justify-content-md-start"
                    >
                      <Rating v-model="item.stars" readonly />
                    </div>
                    <h6 class="mt-2 font-kanit">{{ item.registered }}</h6>
                  </div>
                  <div
                    class="col-lg-9 col-md-4 col-12 text-lg-start text-md-start text-center"
                  >
                    <div class="bg-body-tertiary px-3 py-3 rounded">
                      <p>
                        {{ item.caption }}
                      </p>
                    </div>
                  </div>
                </div>
              </template>
            </Card>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Button from "primevue/button";
import Card from "primevue/card";
import Divider from "primevue/divider";
import DataView from "primevue/dataview";
import SelectButton from "primevue/selectbutton";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import Rating from "primevue/rating";
import Tag from "primevue/tag";

//Patients data
const reviews = ref([
  {
    index: 0,
    name: "Cote Estrada",
    caption:
      "Pariatur officia quis ullamco id occaecat. Reprehenderit minim magna officia Lorem et sint enim. Irure aliquip consectetur adipisicing nulla sunt culpa ut excepteur cupidatat. Ea elit nostrud sint sint est eu in officia ut aliquip dolore. Ad voluptate enim quis fugiat sint consectetur minim aliquip voluptate ullamco excepteur pariatur Lorem voluptate. Aliquip reprehenderit officia Lorem dolore duis pariatur. Pariatur fugiat sit ullamco ad officia do mollit elit irure.\r\n",
    registered: "2019/02/25",
    stars: 4.4,
  },
  {
    index: 1,
    name: "Verna Rutledge",
    caption:
      "Et sint qui elit ipsum consectetur pariatur. Excepteur et occaecat ad commodo elit. Adipisicing velit incididunt sint do. Elit qui deserunt ipsum cupidatat aliquip quis veniam ex sunt dolor ea. Amet aute ad magna ex commodo dolore incididunt.\r\n",
    registered: "2023/01/07",
    stars: 2.8,
  },
  {
    index: 2,
    name: "Hancock Nolan",
    caption:
      "Veniam magna eu eu laboris amet dolor ut fugiat ut proident ut. Cupidatat nostrud deserunt aute tempor ut labore nostrud eu ex labore ut dolore excepteur nisi. Sint enim consequat cupidatat ex irure ea est velit. Deserunt ut elit culpa nisi esse fugiat dolore excepteur cupidatat cupidatat laboris voluptate. Culpa cupidatat eiusmod laborum veniam tempor fugiat fugiat enim irure tempor et in ullamco. Est aliquip sunt aliquip eiusmod dolore fugiat velit est quis eu et veniam enim ex.\r\n",
    registered: "2024/03/08",
    stars: 2,
  },
  {
    index: 3,
    name: "Frye Russell",
    caption:
      "Voluptate laboris eu cillum irure sunt nisi dolore pariatur. Dolor incididunt exercitation ex aliquip fugiat dolore fugiat Lorem et non excepteur. Aute officia sit cupidatat dolor nulla incididunt excepteur ullamco. Reprehenderit tempor consectetur deserunt id ex ullamco cupidatat nostrud anim ullamco.\r\n",
    registered: "2019/01/12",
    stars: 2.9,
  },
  {
    index: 4,
    name: "Lydia Mcknight",
    caption:
      "Cupidatat ad ullamco consectetur consectetur et quis reprehenderit quis mollit. Magna reprehenderit labore consequat sint veniam quis. Duis sunt tempor et aute elit fugiat id do. Elit ullamco dolor ad labore ipsum duis.\r\n",
    registered: "2024/03/19",
    stars: 3.8,
  },
  {
    index: 5,
    name: "Wolf Beasley",
    caption:
      "Proident incididunt non qui exercitation. Exercitation dolore ad nostrud nostrud laboris laborum deserunt cillum pariatur qui anim cillum commodo. Nisi adipisicing et aute consequat Lorem. Est amet ipsum id ullamco quis magna ex aliquip anim culpa quis. Voluptate mollit minim exercitation aliqua. Mollit aute amet quis esse occaecat deserunt dolor laborum.\r\n",
    registered: "2014/12/27",
    stars: 3.2,
  },
  {
    index: 6,
    name: "Janice Davidson",
    caption:
      "Aliquip quis consequat occaecat ea sunt aliqua sint ea nisi. Occaecat commodo occaecat veniam labore ad veniam. Ex voluptate ipsum fugiat aliquip ea culpa sint. Ut do elit cupidatat culpa fugiat ullamco incididunt sint. Eu in culpa dolor tempor culpa consequat ullamco. Veniam enim enim do qui ex esse adipisicing nostrud consequat consequat et ullamco amet. Laboris ex irure est cillum et minim aute adipisicing ea ullamco exercitation deserunt occaecat.\r\n",
    registered: "2022/02/19",
    stars: 4,
  },
  {
    index: 7,
    name: "Tran Weeks",
    caption:
      "Laboris sunt commodo labore do reprehenderit nulla fugiat dolor. Aliquip laboris amet esse commodo excepteur. Id esse aliquip voluptate veniam irure proident reprehenderit quis ad tempor elit.\r\n",
    registered: "2018/10/20",
    stars: 4.8,
  },
  {
    index: 8,
    name: "Juanita Knight",
    caption:
      "Anim nostrud minim anim dolor anim voluptate. Ex ullamco fugiat cillum Lorem tempor ad nisi dolor qui anim fugiat. Dolore labore aute enim sit laboris minim Lorem id cupidatat amet sint non dolore. Sint et proident eu qui aute sint ex exercitation et excepteur adipisicing consectetur. Est ut ea consequat nostrud consectetur sint veniam dolore sunt ut Lorem exercitation minim. Amet cupidatat pariatur mollit excepteur deserunt aliqua sit et ipsum consequat ex deserunt esse cillum.\r\n",
    registered: "2015/01/31",
    stars: 2.8,
  },
  {
    index: 9,
    name: "Pansy Franco",
    caption:
      "Et nulla anim id deserunt. Laboris reprehenderit dolor non tempor Lorem velit aliqua sit laborum dolore in nostrud. Deserunt cupidatat magna do duis culpa ad. Esse et duis ex mollit laborum amet ea reprehenderit. In nostrud ea esse ea adipisicing aliquip eu voluptate dolor sunt officia.\r\n",
    registered: "2014/05/12",
    stars: 1.8,
  },
  {
    index: 10,
    name: "Hensley Hickman",
    caption:
      "Aliqua elit exercitation aute amet anim. Ad ipsum amet veniam ex incididunt reprehenderit. Irure anim in consequat consectetur eu laborum aliquip mollit magna esse aute eiusmod. Enim id cupidatat nulla nisi ipsum non ullamco laboris duis aliqua do et.\r\n",
    registered: "2016/10/23",
    stars: 1.5,
  },
  {
    index: 11,
    name: "Bass Little",
    caption:
      "Dolore nisi ullamco eu sit. Est eiusmod duis cillum nisi ex. Laborum cupidatat eu excepteur dolore nisi est. Amet ut quis laboris culpa eiusmod veniam pariatur enim dolore.\r\n",
    registered: "2017/09/26",
    stars: 2.6,
  },
  {
    index: 12,
    name: "Gilda Hernandez",
    caption:
      "Esse eiusmod incididunt est aute ad. Voluptate qui fugiat aliqua commodo nulla ad. Do elit est enim mollit consectetur Lorem eu. Duis eiusmod duis elit aliquip excepteur tempor. Ullamco nulla velit ut sunt.\r\n",
    registered: "2024/10/31",
    stars: 3,
  },
  {
    index: 13,
    name: "Mccullough Flynn",
    caption:
      "Excepteur velit officia laboris et ut tempor nulla amet irure voluptate nostrud sint deserunt. Velit enim labore qui amet magna qui officia et esse exercitation minim tempor. Quis commodo enim sit officia nostrud. Commodo culpa velit ullamco ullamco mollit eiusmod veniam consectetur ad. Do Lorem incididunt aliquip quis id sunt culpa fugiat veniam aute cillum nulla ad duis. Mollit deserunt culpa reprehenderit in dolore culpa et eiusmod non velit commodo sint.\r\n",
    registered: "2020/10/16",
    stars: 3.5,
  },
  {
    index: 14,
    name: "Cara Colon",
    caption:
      "Pariatur veniam cillum reprehenderit labore aliqua occaecat proident culpa labore amet fugiat mollit. Veniam elit ut duis laboris eu id magna amet labore reprehenderit id sit est. Eu sit eiusmod irure incididunt consectetur mollit nisi elit qui sint.\r\n",
    registered: "2022/12/18",
    stars: 3.2,
  },
  {
    index: 15,
    name: "Iris Richmond",
    caption:
      "Quis minim sunt sit ipsum labore culpa veniam occaecat enim nulla deserunt ullamco non voluptate. Tempor officia Lorem nostrud deserunt sint aliquip consectetur ad exercitation ad do aute. Ad duis irure in in Lorem sit est id nisi. Culpa reprehenderit magna amet in nostrud cupidatat sint quis. Mollit magna culpa culpa laborum esse irure qui sunt ut aute.\r\n",
    registered: "2014/05/13",
    stars: 2.6,
  },
  {
    index: 16,
    name: "Wilma Hays",
    caption:
      "Non culpa qui occaecat proident laborum. Do enim cillum aliquip ut nostrud. Adipisicing pariatur ex laborum cillum qui esse ea proident Lorem eu incididunt ut. Laboris exercitation ut ipsum exercitation exercitation commodo pariatur.\r\n",
    registered: "2021/11/12",
    stars: 3.3,
  },
  {
    index: 17,
    name: "Joan Torres",
    caption:
      "Veniam labore aliquip quis anim nulla exercitation reprehenderit ut sint occaecat veniam. Voluptate aliqua aliqua laborum ipsum ipsum laborum dolore cillum consectetur laboris nostrud qui laboris. Dolore ullamco consectetur commodo culpa sunt incididunt eiusmod. Ut esse non aliquip consectetur nisi non minim. Aliquip enim ullamco nulla proident consequat eu veniam labore elit occaecat elit. Ullamco exercitation reprehenderit cillum nisi et duis. Exercitation qui fugiat aliquip do cillum minim.\r\n",
    registered: "2014/09/09",
    stars: 1.9,
  },
  {
    index: 18,
    name: "Priscilla Lowe",
    caption:
      "Proident velit amet qui do adipisicing ad nostrud nostrud esse pariatur est. Aute labore sunt ipsum fugiat voluptate labore exercitation mollit nulla dolore elit. Duis excepteur consequat ut eiusmod Lorem dolore. Id amet exercitation elit mollit qui minim anim voluptate. Excepteur amet dolore irure in labore velit aliquip mollit velit cillum sit.\r\n",
    registered: "2022/05/25",
    stars: 4.1,
  },
  {
    index: 19,
    name: "Catherine Sawyer",
    caption:
      "Laborum qui incididunt aute occaecat laborum. Reprehenderit commodo ullamco deserunt velit. Exercitation fugiat ex enim dolor excepteur ipsum ea.\r\n",
    registered: "2017/06/25",
    stars: 1,
  },
]);

//number of row to display
const row = ref(6);
//value of search keyword
const keyword = ref("");
//value of overall rating
const rating = ref(0);

//Fuction to calc the overall rating
function oRate() {
  //store result with init value of 0
  var stars_sum = 0;
  //loop in review array
  reviews.value.forEach((element) => {
    stars_sum += element.stars; // sun the star and result value
  });
  //set rating value to sum of star dived by count and fix the value to remove floor value
  rating.value = (stars_sum / reviews.value.length).toFixed(1);
}
//Function to search for patient based on his name
function Search() {
  var data; //store result
  //filter the reviews array and get the records that match the input name then store it in data
  data = reviews.value.filter((i) =>
    //using lowercase string to avoid any conflit from typing
    i.name.toLocaleLowerCase().includes(keyword.value.toLocaleLowerCase())
  );
  //check if data is null then return the patient array else return the filtered array
  return data == null ? reviews : data;
}

onMounted(() => {
  //Calling oRate function which calculate the overall rating when page mounted
  oRate();
});
</script>

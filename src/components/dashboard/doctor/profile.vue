<template>
  <div class="container">
    <h2 class="font-kanit sp-title">Profile Settings</h2>
    <hr />
    <div class="flex gap-2 shadow-3 bg-body-tertiary py-3 rounded">
      <Button
        label="Personal Information"
        :outlined="value != 0"
        @click="value = 0"
        class="ms-3"
        icon="pi pi-user"
      />
      <Button
        label="Authentication Details"
        :outlined="value != 1"
        @click="value = 1"
        icon="pi pi-lock"
      />
    </div>
    <div class="mt-2">
      <Tabs v-model:value="value">
        <TabPanels>
          <TabPanel :value="0">
            <Form
              :resolver="resolver"
              @submit="onFormSubmit"
              :validateOnValueUpdate="true"
              :validateOnBlur="true"
              :initialValues="information"
            >
              <div class="row align-items-center">
                <div class="col-2 h-fit">
                  <img :src="img" class="img-fluid rounded" />
                </div>
                <div class="col">
                  <h5>Pofile Image</h5>
                  <FileUpload
                    accept="image/*"
                    :maxFileSize="4000000"
                    @select="onFileSelect"
                    ref="fileupload"
                  >
                    <template
                      #header="{ chooseCallback, clearCallback, files }"
                    >
                      <Button
                        @click="chooseCallback()"
                        icon="pi pi-upload"
                        outlined
                        rounded
                      ></Button>
                      <Button
                        @click="clearCallback()"
                        icon="pi pi-times"
                        outlined
                        rounded
                        severity="danger"
                        :disabled="!files || files.length === 0"
                      ></Button>
                    </template>
                    <template #empty>
                      <span>Drag and drop files to here to upload.</span>
                      <br />
                      <small class="text-muted">
                        Your Image should Below 4 MB, Accepted format
                        Jpg,Png,Svg
                      </small>
                    </template>
                  </FileUpload>
                </div>
              </div>
              <hr />
              <h5>Personal Information</h5>
              <div class="card p-4 px-4">
                <div class="row">
                  <FormField v-slot="$field" name="firstName" class="col">
                    <InputGroup>
                      <InputGroupAddon>
                        <i class="fas fa-user text-primary"></i>
                      </InputGroupAddon>
                      <FloatLabel variant="on">
                        <InputText
                          v-model="information.firstName"
                          :invalid="!information.firstName"
                          type="text"
                          fluid
                        />
                        <label>First Name</label>
                      </FloatLabel>
                    </InputGroup>
                    <div>
                      <small v-if="$field?.invalid" class="text-danger">{{
                        $field.error?.message
                      }}</small>
                    </div>
                  </FormField>
                  <FormField v-slot="$field" name="lastName" class="col">
                    <InputGroup>
                      <InputGroupAddon>
                        <i class="fas fa-user text-primary"></i>
                      </InputGroupAddon>
                      <FloatLabel variant="on">
                        <InputText
                          v-model="information.lastName"
                          :invalid="!information.lastName"
                        />
                        <label>Last Name</label>
                      </FloatLabel>
                    </InputGroup>
                    <div>
                      <small v-if="$field?.invalid" class="text-danger">{{
                        $field.error?.message
                      }}</small>
                    </div>
                  </FormField>
                </div>
                <div class="row">
                  <FormField v-slot="$field" name="medical" class="col">
                    <InputGroup>
                      <InputGroupAddon>
                        <i class="fas fa-stethoscope text-primary"></i>
                      </InputGroupAddon>
                      <FloatLabel variant="on">
                        <Select
                          v-model="information.medical"
                          :options="item"
                          optionLabel="title"
                          checkmark
                          :highlightOnSelect="false"
                          filter
                          :invalid="!information.medical"
                        />
                        <label>Select Medical Specialty</label>
                      </FloatLabel>
                    </InputGroup>
                    <div>
                      <small v-if="$field?.invalid" class="text-danger">{{
                        $field.error?.message
                      }}</small>
                    </div>
                  </FormField>
                </div>
                <div class="row">
                  <FormField v-slot="$field" name="phone" class="col">
                    <InputGroup>
                      <InputGroupAddon>
                        <i class="fas fa-phone text-primary"></i>
                      </InputGroupAddon>
                      <FloatLabel variant="on">
                        <InputMask
                          v-model="information.phone"
                          :invalid="!information.phone"
                          mask="(999) 999-999-999"
                        />
                        <label>Phone Number</label>
                      </FloatLabel>
                      <div>
                        <small v-if="$field?.invalid" class="text-danger">{{
                          $field.error?.message
                        }}</small>
                      </div>
                    </InputGroup>
                  </FormField>
                  <FormField v-slot="$field" name="email" class="col">
                    <InputGroup>
                      <InputGroupAddon>
                        <i class="fas fa-at text-primary"></i>
                      </InputGroupAddon>
                      <FloatLabel variant="on">
                        <InputText
                          v-model="information.email"
                          :invalid="!information.email"
                        />
                        <label>Email Address</label>
                      </FloatLabel>
                    </InputGroup>
                    <div>
                      <small v-if="$field?.invalid" class="text-danger">{{
                        $field.error?.message
                      }}</small>
                    </div>
                  </FormField>
                  <FormField v-slot="$field" name="languages" class="col">
                    <InputGroup>
                      <InputGroupAddon>
                        <i class="fas fa-language text-primary"></i>
                      </InputGroupAddon>
                      <FloatLabel variant="on">
                        <MultiSelect
                          v-model="information.languages"
                          :options="language"
                          optionLabel="name"
                          checkmark
                          :highlightOnSelect="false"
                          filter
                          multiple
                          :invalid="!information.languages"
                        />
                        <label>Spoken Languages</label>
                      </FloatLabel>
                    </InputGroup>
                    <div>
                      <small v-if="$field?.invalid" class="text-danger">{{
                        $field.error?.message
                      }}</small>
                    </div>
                  </FormField>
                </div>
              </div>
              <div class="flex justify-content-end mt-3">
                <Button label="Save Changes" icon="fas fa-save" type="submit" />
              </div>
            </Form>
          </TabPanel>
          <TabPanel :value="1">
            <h5>Change Password</h5>
            <hr />
            <div class="card py-4 px-4">
              <div class="flex gap-3">
                <FloatLabel variant="on">
                  <Password v-model="opassword" :feedback="false" toggleMask />
                  <label>Old Password</label>
                </FloatLabel>
                <FloatLabel variant="on">
                  <Password v-model="information.password" toggleMask />
                  <label>New Password</label>
                </FloatLabel>
                <FloatLabel variant="on">
                  <Password
                    v-model="cpassword"
                    toggleMask
                    :invalid="cpassword != information.password"
                  />
                  <label>Confirm Password</label>
                </FloatLabel>
                <Button label="Save Changes" icon="fas fa-save" />
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>
</template>

<script setup>
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";
import Button from "primevue/button";
import FileUpload from "primevue/fileupload";
import { Form } from "@primevue/forms";

import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Select from "primevue/select";
import MultiSelect from "primevue/multiselect";
import FloatLabel from "primevue/floatlabel";
import InputMask from "primevue/inputmask";
import Password from "primevue/password";
import Message from "primevue/message";
import { FormField } from "@primevue/forms";

//Tab value ref
const value = ref(0);

//Array to store doctor information
const information = ref({
  firstName: "John",
  lastName: "Doe",
  medical: { id: 1, title: "Allergology" },
  phone: "963 998556332",
  email: "jdoe@medical.dev",
  languages: [
    {
      code: "en",
      name: "English",
      nativeName: "English",
    },
    {
      code: "ar",
      name: "Arabic",
      nativeName: "العربية",
    },
  ],
  password: null,
});
//Ref for a picture upload field
const fileupload = ref();
//Ref for old password field
const opassword = ref();
//Ref for confirm password field
const cpassword = ref();
const img = require("../../../assets/images/homepage/doctor2.jpg");
//Test array for medical specialty
const item = [
  { id: 1, title: "Allergology" },
  { id: 2, title: "Anaesthetics" },
  { id: 3, title: "Cardiology" },
  { id: 4, title: "Dermatology" },
  { id: 5, title: "Endocrinology" },
  { id: 6, title: "Immunology" },
  { id: 7, title: "Microbiology" },
  { id: 8, title: "Nephrology" },
  { id: 9, title: "Neurology" },
  { id: 10, title: "Neurosurgery" },
];
const language = ref([
  { code: "ab", name: "Abkhaz", nativeName: "аҧсуа" },
  { code: "aa", name: "Afar", nativeName: "Afaraf" },
  { code: "af", name: "Afrikaans", nativeName: "Afrikaans" },
  { code: "ak", name: "Akan", nativeName: "Akan" },
  { code: "sq", name: "Albanian", nativeName: "Shqip" },
  { code: "am", name: "Amharic", nativeName: "አማርኛ" },
  { code: "ar", name: "Arabic", nativeName: "العربية" },
  { code: "an", name: "Aragonese", nativeName: "Aragonés" },
  { code: "hy", name: "Armenian", nativeName: "Հայերեն" },
  { code: "as", name: "Assamese", nativeName: "অসমীয়া" },
  { code: "av", name: "Avaric", nativeName: "авар мацӀ, магӀарул мацӀ" },
  { code: "ae", name: "Avestan", nativeName: "avesta" },
  { code: "ay", name: "Aymara", nativeName: "aymar aru" },
  { code: "az", name: "Azerbaijani", nativeName: "azərbaycan dili" },
  { code: "bm", name: "Bambara", nativeName: "bamanankan" },
  { code: "ba", name: "Bashkir", nativeName: "башҡорт теле" },
  { code: "eu", name: "Basque", nativeName: "euskara, euskera" },
  { code: "be", name: "Belarusian", nativeName: "Беларуская" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  { code: "bh", name: "Bihari", nativeName: "भोजपुरी" },
  { code: "bi", name: "Bislama", nativeName: "Bislama" },
  { code: "bs", name: "Bosnian", nativeName: "bosanski jezik" },
  { code: "br", name: "Breton", nativeName: "brezhoneg" },
  { code: "bg", name: "Bulgarian", nativeName: "български език" },
  { code: "my", name: "Burmese", nativeName: "ဗမာစာ" },
  { code: "ca", name: "Catalan; Valencian", nativeName: "Català" },
  { code: "ch", name: "Chamorro", nativeName: "Chamoru" },
  { code: "ce", name: "Chechen", nativeName: "нохчийн мотт" },
  { code: "zh", name: "Chinese", nativeName: "中文 (Zhōngwén), 汉语, 漢語" },
  { code: "cv", name: "Chuvash", nativeName: "чӑваш чӗлхи" },
  { code: "kw", name: "Cornish", nativeName: "Kernewek" },
  { code: "co", name: "Corsican", nativeName: "corsu, lingua corsa" },
  { code: "cr", name: "Cree", nativeName: "ᓀᐦᐃᔭᐍᐏᐣ" },
  { code: "hr", name: "Croatian", nativeName: "hrvatski" },
  { code: "cs", name: "Czech", nativeName: "česky, čeština" },
  { code: "da", name: "Danish", nativeName: "dansk" },
  { code: "dv", name: "Divehi; Dhivehi; Maldivian;", nativeName: "ދިވެހި" },
  { code: "nl", name: "Dutch", nativeName: "Nederlands, Vlaams" },
  { code: "en", name: "English", nativeName: "English" },
  { code: "eo", name: "Esperanto", nativeName: "Esperanto" },
  { code: "et", name: "Estonian", nativeName: "eesti, eesti keel" },
  { code: "ee", name: "Ewe", nativeName: "Eʋegbe" },
  { code: "fo", name: "Faroese", nativeName: "føroyskt" },
  { code: "fj", name: "Fijian", nativeName: "vosa Vakaviti" },
  { code: "fi", name: "Finnish", nativeName: "suomi, suomen kieli" },
  { code: "fr", name: "French", nativeName: "français, langue française" },
  {
    code: "ff",
    name: "Fula; Fulah; Pulaar; Pular",
    nativeName: "Fulfulde, Pulaar, Pular",
  },
  { code: "gl", name: "Galician", nativeName: "Galego" },
  { code: "ka", name: "Georgian", nativeName: "ქართული" },
  { code: "de", name: "German", nativeName: "Deutsch" },
  { code: "el", name: "Greek, Modern", nativeName: "Ελληνικά" },
  { code: "gn", name: "Guaraní", nativeName: "Avañeẽ" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
  { code: "ht", name: "Haitian; Haitian Creole", nativeName: "Kreyòl ayisyen" },
  { code: "ha", name: "Hausa", nativeName: "Hausa, هَوُسَ" },
  { code: "he", name: "Hebrew (modern)", nativeName: "עברית" },
  { code: "hz", name: "Herero", nativeName: "Otjiherero" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी, हिंदी" },
  { code: "ho", name: "Hiri Motu", nativeName: "Hiri Motu" },
  { code: "hu", name: "Hungarian", nativeName: "Magyar" },
  { code: "ia", name: "Interlingua", nativeName: "Interlingua" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia" },

  { code: "ga", name: "Irish", nativeName: "Gaeilge" },
  { code: "ig", name: "Igbo", nativeName: "Asụsụ Igbo" },
  { code: "ik", name: "Inupiaq", nativeName: "Iñupiaq, Iñupiatun" },
  { code: "io", name: "Ido", nativeName: "Ido" },
  { code: "is", name: "Icelandic", nativeName: "Íslenska" },
  { code: "it", name: "Italian", nativeName: "Italiano" },
  { code: "iu", name: "Inuktitut", nativeName: "ᐃᓄᒃᑎᑐᑦ" },
  { code: "ja", name: "Japanese", nativeName: "日本語 (にほんご／にっぽんご)" },
  { code: "jv", name: "Javanese", nativeName: "basa Jawa" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
  { code: "kr", name: "Kanuri", nativeName: "Kanuri" },
  { code: "ks", name: "Kashmiri", nativeName: "कश्मीरी, كشميري‎" },
  { code: "kk", name: "Kazakh", nativeName: "Қазақ тілі" },
  { code: "km", name: "Khmer", nativeName: "ភាសាខ្មែរ" },
  { code: "ki", name: "Kikuyu, Gikuyu", nativeName: "Gĩkũyũ" },
  { code: "rw", name: "Kinyarwanda", nativeName: "Ikinyarwanda" },
  { code: "ky", name: "Kirghiz, Kyrgyz", nativeName: "кыргыз тили" },
  { code: "kv", name: "Komi", nativeName: "коми кыв" },
  { code: "kg", name: "Kongo", nativeName: "KiKongo" },
  {
    code: "ko",
    name: "Korean",
    nativeName: "한국어 (韓國語), 조선말 (朝鮮語)",
  },
  { code: "ku", name: "Kurdish", nativeName: "Kurdî, كوردی‎" },
  { code: "kj", name: "Kwanyama, Kuanyama", nativeName: "Kuanyama" },
  { code: "la", name: "Latin", nativeName: "latine, lingua latina" },
  {
    code: "lb",
    name: "Luxembourgish, Letzeburgesch",
    nativeName: "Lëtzebuergesch",
  },
  { code: "lg", name: "Luganda", nativeName: "Luganda" },
  {
    code: "li",
    name: "Limburgish, Limburgan, Limburger",
    nativeName: "Limburgs",
  },
  { code: "ln", name: "Lingala", nativeName: "Lingála" },
  { code: "lo", name: "Lao", nativeName: "ພາສາລາວ" },
  { code: "lt", name: "Lithuanian", nativeName: "lietuvių kalba" },
  { code: "lu", name: "Luba-Katanga", nativeName: "" },
  { code: "lv", name: "Latvian", nativeName: "latviešu valoda" },
  { code: "gv", name: "Manx", nativeName: "Gaelg, Gailck" },
  { code: "mk", name: "Macedonian", nativeName: "македонски јазик" },
  { code: "mg", name: "Malagasy", nativeName: "Malagasy fiteny" },
  { code: "ms", name: "Malay", nativeName: "bahasa Melayu, بهاس ملايو‎" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം" },
  { code: "mt", name: "Maltese", nativeName: "Malti" },
  { code: "mi", name: "Māori", nativeName: "te reo Māori" },
  { code: "mr", name: "Marathi (Marāṭhī)", nativeName: "मराठी" },
  { code: "mh", name: "Marshallese", nativeName: "Kajin M̧ajeļ" },
  { code: "mn", name: "Mongolian", nativeName: "монгол" },
  { code: "na", name: "Nauru", nativeName: "Ekakairũ Naoero" },
  { code: "nv", name: "Navajo, Navaho", nativeName: "Diné bizaad, Dinékʼehǰí" },
  { code: "nb", name: "Norwegian Bokmål", nativeName: "Norsk bokmål" },
  { code: "nd", name: "North Ndebele", nativeName: "isiNdebele" },
  { code: "ne", name: "Nepali", nativeName: "नेपाली" },
  { code: "ng", name: "Ndonga", nativeName: "Owambo" },
  { code: "nn", name: "Norwegian Nynorsk", nativeName: "Norsk nynorsk" },
  { code: "no", name: "Norwegian", nativeName: "Norsk" },
  { code: "ii", name: "Nuosu", nativeName: "ꆈꌠ꒿ Nuosuhxop" },
  { code: "nr", name: "South Ndebele", nativeName: "isiNdebele" },
  { code: "oc", name: "Occitan", nativeName: "Occitan" },
  { code: "oj", name: "Ojibwe, Ojibwa", nativeName: "ᐊᓂᔑᓈᐯᒧᐎᓐ" },
  { code: "om", name: "Oromo", nativeName: "Afaan Oromoo" },
  { code: "or", name: "Oriya", nativeName: "ଓଡ଼ିଆ" },
  { code: "os", name: "Ossetian, Ossetic", nativeName: "ирон æвзаг" },
  { code: "pa", name: "Panjabi, Punjabi", nativeName: "ਪੰਜਾਬੀ, پنجابی‎" },
  { code: "pi", name: "Pāli", nativeName: "पाऴि" },
  { code: "fa", name: "Persian", nativeName: "فارسی" },
  { code: "pl", name: "Polish", nativeName: "polski" },
  { code: "ps", name: "Pashto, Pushto", nativeName: "پښتو" },
  { code: "pt", name: "Portuguese", nativeName: "Português" },
  { code: "qu", name: "Quechua", nativeName: "Runa Simi, Kichwa" },
  { code: "rm", name: "Romansh", nativeName: "rumantsch grischun" },
  { code: "rn", name: "Kirundi", nativeName: "kiRundi" },
  { code: "ro", name: "Romanian, Moldavian, Moldovan", nativeName: "română" },
  { code: "ru", name: "Russian", nativeName: "русский язык" },
  { code: "sa", name: "Sanskrit (Saṁskṛta)", nativeName: "संस्कृतम्" },
  { code: "sc", name: "Sardinian", nativeName: "sardu" },
  { code: "sd", name: "Sindhi", nativeName: "सिन्धी, سنڌي، سندھی‎" },
  { code: "se", name: "Northern Sami", nativeName: "Davvisámegiella" },
  { code: "sm", name: "Samoan", nativeName: "gagana faa Samoa" },
  { code: "sg", name: "Sango", nativeName: "yângâ tî sängö" },
  { code: "sr", name: "Serbian", nativeName: "српски језик" },
  { code: "gd", name: "Scottish Gaelic; Gaelic", nativeName: "Gàidhlig" },
  { code: "sn", name: "Shona", nativeName: "chiShona" },
  { code: "si", name: "Sinhala, Sinhalese", nativeName: "සිංහල" },
  { code: "sk", name: "Slovak", nativeName: "slovenčina" },
  { code: "sl", name: "Slovene", nativeName: "slovenščina" },
  { code: "so", name: "Somali", nativeName: "Soomaaliga, af Soomaali" },
  { code: "st", name: "Southern Sotho", nativeName: "Sesotho" },
  { code: "es", name: "Spanish; Castilian", nativeName: "español, castellano" },
  { code: "su", name: "Sundanese", nativeName: "Basa Sunda" },
  { code: "sw", name: "Swahili", nativeName: "Kiswahili" },
  { code: "ss", name: "Swati", nativeName: "SiSwati" },
  { code: "sv", name: "Swedish", nativeName: "svenska" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "tg", name: "Tajik", nativeName: "тоҷикӣ, toğikī, تاجیکی‎" },
  { code: "th", name: "Thai", nativeName: "ไทย" },
  { code: "ti", name: "Tigrinya", nativeName: "ትግርኛ" },
  {
    code: "bo",
    name: "Tibetan Standard, Tibetan, Central",
    nativeName: "བོད་ཡིག",
  },
  { code: "tk", name: "Turkmen", nativeName: "Türkmen, Түркмен" },
  { code: "tl", name: "Tagalog", nativeName: "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔" },
  { code: "tn", name: "Tswana", nativeName: "Setswana" },
  { code: "to", name: "Tonga (Tonga Islands)", nativeName: "faka Tonga" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe" },
  { code: "ts", name: "Tsonga", nativeName: "Xitsonga" },
  { code: "tt", name: "Tatar", nativeName: "татарча, tatarça, تاتارچا‎" },
  { code: "tw", name: "Twi", nativeName: "Twi" },
  { code: "ty", name: "Tahitian", nativeName: "Reo Tahiti" },
  { code: "ug", name: "Uighur, Uyghur", nativeName: "Uyƣurqə, ئۇيغۇرچە‎" },
  { code: "uk", name: "Ukrainian", nativeName: "українська" },
  { code: "ur", name: "Urdu", nativeName: "اردو" },
  { code: "uz", name: "Uzbek", nativeName: "zbek, Ўзбек, أۇزبېك‎" },
  { code: "ve", name: "Venda", nativeName: "Tshivenḓa" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt" },
  { code: "vo", name: "Volapük", nativeName: "Volapük" },
  { code: "wa", name: "Walloon", nativeName: "Walon" },
  { code: "cy", name: "Welsh", nativeName: "Cymraeg" },
  { code: "wo", name: "Wolof", nativeName: "Wollof" },
  { code: "fy", name: "Western Frisian", nativeName: "Frysk" },
  { code: "xh", name: "Xhosa", nativeName: "isiXhosa" },
  { code: "yi", name: "Yiddish", nativeName: "ייִדיש" },
  { code: "yo", name: "Yoruba", nativeName: "Yorùbá" },
  { code: "za", name: "Zhuang, Chuang", nativeName: "Saɯ cueŋƅ, Saw cuengh" },
]);

//PrimeVue resolver used to validate form fields
const resolver = ({ values }) => {
  const errors = {
    firstName: [],
    lastName: [],
    phone: [],
    email: [],
    language: [],
    medical: [],
  };
  //Checking if value is null push error to errors array
  if (!values.firstName) {
    errors.firstName.push({
      type: "required",
      message: "First Name is required",
    });
  }
  if (!values.lastName) {
    errors.lastName.push({
      type: "required",
      message: "Last Name is required",
    });
  }
  if (!values.phone) {
    errors.phone.push({
      type: "required",
      message: "Phone number is required",
    });
  }
  if (!values.email) {
    errors.email.push({
      type: "required",
      message: "Email Address is required",
    });
  }
  if (!values.language) {
    errors.language.push({
      type: "required",
      message: "Please select one or more language",
    });
  }

  return { errors };
};

//API CALL to update doctor information on form submit
const onFormSubmit = ({ valid }) => {
  console.log(valid);
  fileupload.value.upload();
};

//Pushing file to information array when new file has choosen
function onFileSelect(event) {
  information.value.picture = event.files[0];
}
</script>

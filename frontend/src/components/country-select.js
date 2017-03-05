import React from 'react';
import { Field } from 'redux-form';
import { FormControl, FormGroup } from 'react-bootstrap';

const Select = ({ input, label, type, meta: { touched, error, warning } }) => {
        return (
            <FormGroup>
                    <FormControl {...input} componentClass="select" placeholder={label}>
                            <option>Eesti Vabariik</option>
                            <option>Afganistan</option>
                            <option>Ahvenamaa </option>
                            <option>Albaania </option>
                            <option>Alžeeria</option>
                            <option>Ameerika Samoa</option>
                            <option>Ameerika Ühendriigid</option>
                            <option>Andorra </option>
                            <option>Angola</option>
                            <option>Anguilla </option>
                            <option>Antarktis</option>
                            <option>Antigua ja Barbuda</option>
                            <option>Aomen</option>
                            <option>Araabia Ühendemiraadid</option>
                            <option>Argentina </option>
                            <option>Armeenia </option>
                            <option>Aruba</option>
                            <option>Aserbaidžaan</option>
                            <option>Austraalia</option>
                            <option>Austria </option>
                            <option>Bahama </option>
                            <option>Bahrein</option>
                            <option>Bangladesh</option>
                            <option>Barbados</option>
                            <option>Belau </option>
                            <option>Belgia</option>
                            <option>Belize</option>
                            <option>Benin</option>
                            <option>Bermuda</option>
                            <option>Bhutan</option>
                            <option>Boliivia Paljurahvuseline Riik</option>
                            <option>Bonaire, Sint Eustatius ja Saba</option>
                            <option>Bosnia- ja Hertsegoviina</option>
                            <option>Botswana</option>
                            <option>Bouvet' saar</option>
                            <option>Brasiilia </option>
                            <option>Briti India ookeani ala</option>
                            <option>Briti Neitsisaared</option>
                            <option>Brunei Darussalam</option>
                            <option>Bulgaaria</option>
                            <option>Burkina Faso</option>
                            <option>Burundi </option>
                            <option>Colombia</option>
                            <option>Cooki saared</option>
                            <option>Costa Rica </option>
                            <option>Curaçao</option>
                            <option>Curaçao (Holl)</option>
                            <option>Djibouti </option>
                            <option>Dominica </option>
                            <option>Dominikaani Vabariik</option>
                            <option>Ecuador</option>
                            <option>Egiptus</option>
                            <option>Ekvatoriaal-Guinea</option>
                            <option>El Salvador</option>
                            <option>Elevandiluurannik</option>
                            <option>Eritrea Riik</option>
                            <option>Etioopia</option>
                            <option>Falklandi (Malviini) saared</option>
                            <option>Fidži </option>
                            <option>Filipiini Vabariik</option>
                            <option>Fääri saared</option>
                            <option>Gabon</option>
                            <option>Gambia </option>
                            <option>Ghana</option>
                            <option>Gibraltar </option>
                            <option>Grenada</option>
                            <option>Gruusia</option>
                            <option>Gröönimaa</option>
                            <option>Guadeloupe</option>
                            <option>Guam</option>
                            <option>Guatemala</option>
                            <option>Guernsey</option>
                            <option>Guernsey (GBR)</option>
                            <option>Guinea </option>
                            <option>Guinea-Bissau </option>
                            <option>Guyana </option>
                            <option>Haiti </option>
                            <option>Heard ja McDonald</option>
                            <option>Hiina </option>
                            <option>Hispaania </option>
                            <option>Holland</option>
                            <option>Hollandi Antillid</option>
                            <option>Honduras</option>
                            <option>Hongkong</option>
                            <option>Horvaatia</option>
                            <option>Ida-Timori</option>
                            <option>Ida-Timori</option>
                            <option>Iirimaa</option>
                            <option>Iisrael</option>
                            <option>ilma kodakondsuseta</option>
                            <option>India </option>
                            <option>Indoneesia </option>
                            <option>Iraak</option>
                            <option>Iraan</option>
                            <option>Island</option>
                            <option>Itaalia</option>
                            <option>Jaapan</option>
                            <option>Jamaica</option>
                            <option>Jeemen</option>
                            <option>Jersey</option>
                            <option>JEY</option>
                            <option>Jordaania</option>
                            <option>Jugoslaavia</option>
                            <option>Jõulusaar</option>
                            <option>Kaimanisaared (GBR)</option>
                            <option>Kambodža</option>
                            <option>Kamerun</option>
                            <option>Kanada</option>
                            <option>Kasahstan</option>
                            <option>Katar</option>
                            <option>Kenya </option>
                            <option>Kesk-Aafrika Vabariik</option>
                            <option>Kiribati</option>
                            <option>Komoori Liit</option>
                            <option>Kongo </option>
                            <option>Kongo DV</option>
                            <option>Kookossaared (Keelingi saared)</option>
                            <option>Korea RDV</option>
                            <option>Korea Vabariik</option>
                            <option>Kosovo</option>
                            <option>Kreeka </option>
                            <option>Kuuba </option>
                            <option>Kuveit</option>
                            <option>Kõrgõzstan</option>
                            <option>Küpros</option>
                            <option>Laos</option>
                            <option>Leedu </option>
                            <option>Lesotho </option>
                            <option>Libeeria</option>
                            <option>Liechtenstein</option>
                            <option>Liibanon</option>
                            <option>Liibüa</option>
                            <option>Luksemburg</option>
                            <option>Lõuna-Aafrika Vabariik</option>
                            <option>Lõuna-Georgia ja Lõuna-Sandwich</option>
                            <option>Lõuna-Sudaan</option>
                            <option>Läti Vabariik</option>
                            <option>Lääne-Sahara</option>
                            <option>Madagaskar</option>
                            <option>Makedoonia</option>
                            <option>Malaisia</option>
                            <option>Malawi </option>
                            <option>Maldiivid</option>
                            <option>Mali </option>
                            <option>Malta </option>
                            <option>Mani saar</option>
                            <option>Maroko </option>
                            <option>Marshalli Saared</option>
                            <option>Martinique</option>
                            <option>Mauritaania</option>
                            <option>Mauritius</option>
                            <option>Mayotte</option>
                            <option>Mehhiko</option>
                            <option>Mikroneesia </option>
                            <option>Moldova</option>
                            <option>Monaco </option>
                            <option>Mongoolia</option>
                            <option>Montenegro</option>
                            <option>Montserrat</option>
                            <option>Mosambiik</option>
                            <option>Myanmar</option>
                            <option>Namiibia </option>
                            <option>Nauru </option>
                            <option>Nepal</option>
                            <option>Nicaragua</option>
                            <option>Nigeeria</option>
                            <option>Niger</option>
                            <option>Niue</option>
                            <option>Norfolki Saar</option>
                            <option>Norra </option>
                            <option>Omaan</option>
                            <option>Paapua Uus-Guinea</option>
                            <option>Pakistan</option>
                            <option>Palestiina okupeeritud alad</option>
                            <option>Panama</option>
                            <option>Paraguay</option>
                            <option>Peruu </option>
                            <option>Pitcairn</option>
                            <option>Poola </option>
                            <option>Portugali </option>
                            <option>Prantsuse Guajaana</option>
                            <option>Prantsuse Lõunaalad</option>
                            <option>Prantsuse Polüneesia </option>
                            <option>Prantsusmaa</option>
                            <option>Puerto Rico</option>
                            <option>Põhja-Mariaanid</option>
                            <option>Püha Tool (Vatikan)</option>
                            <option>Réunion</option>
                            <option>Riik teadmata</option>
                            <option>Roheneemesaared</option>
                            <option>Rootsi Kuningriik</option>
                            <option>Rumeenia</option>
                            <option>Rwanda </option>
                            <option>Saalomoni Saared</option>
                            <option>Saint Helena, Ascension ja Tristan da Cunha (GBR)</option>
                            <option>Saint Kitts ja Nevis</option>
                            <option>Saint Lucia</option>
                            <option>Saint Pierre ja Miquelon</option>
                            <option>Saint Vincent ja Grenadiinid</option>
                            <option>Saint-Barthélemy (FRA)</option>
                            <option>Saint-Martin (Prantsuse osa) (FRA)</option>
                            <option>Saksamaa </option>
                            <option>Sambia </option>
                            <option>Samoa </option>
                            <option>San Marino </option>
                            <option>Sao Tomé ja Principe</option>
                            <option>Saudi Araabia </option>
                            <option>Seišellid</option>
                            <option>Senegal</option>
                            <option>Serbia </option>
                            <option>Sierra Leone </option>
                            <option>Singapur</option>
                            <option>Sint Marteen (Hollandi osa)</option>
                            <option>Slovakkia</option>
                            <option>Sloveenia</option>
                            <option>Somaali Vabariik</option>
                            <option>Soome </option>
                            <option>Sri Lanka</option>
                            <option>Sudaan</option>
                            <option>Suriname</option>
                            <option>Suurbritannia</option>
                            <option>Svaasimaa</option>
                            <option>Svalbard ja Jan Mayen</option>
                            <option>Süüria </option>
                            <option>Šveits</option>
                            <option>Zimbabwe</option>
                            <option>Taani</option>
                            <option>Tadžikistan</option>
                            <option>Tai </option>
                            <option>Taiwan</option>
                            <option>Tansaania </option>
                            <option>Togo </option>
                            <option>Tokelau</option>
                            <option>Tonga </option>
                            <option>Trinidad ja Tobago</option>
                            <option>Tšaad</option>
                            <option>Tšehhi </option>
                            <option>Tšiili </option>
                            <option>Tuneesia </option>
                            <option>Turks ja Caicos</option>
                            <option>Tuvalu</option>
                            <option>Türgi </option>
                            <option>Türkmenistan</option>
                            <option>Uganda </option>
                            <option>Ukraina</option>
                            <option>Ungari </option>
                            <option>Uruguay</option>
                            <option>USA Neitsisaared</option>
                            <option>Usbekistan</option>
                            <option>Uus-Kaledoonia</option>
                            <option>Uus-Meremaa</option>
                            <option>Valgevene </option>
                            <option>Wallis ja Futuna</option>
                            <option>Vanuatu </option>
                            <option>Venemaa Föderatsioon</option>
                            <option>Venezuela</option>
                            <option>Vietnam</option>
                            <option>Ühendriikide hajasaared</option>
                            <option>Mujal nimetamata territooriumid</option>
                    </FormControl>
            </FormGroup>
        );
};

const CountrySelect = () => {
    return (
        <Field name="personCountry"
               type="select"
               component={Select}/>
    );
};

export default CountrySelect;

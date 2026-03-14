import React from "react";
import { Layout } from "../../layouts/Layout";
import { ServiceLayout } from "../../layouts/ServiceLayout";
import thumb from "../../assets/img/service/details/thumb.jpg";
import { ServiceDetailsAccordion } from "../../components/service/ServiceDetailsAccordion";
import { ServiceDetailsCircularProgress } from "../../components/service/ServiceDetailsCircularProgress";

export const ServiceDetails = () => {
  return (
    <Layout
      breadcrumbTitle={"Digitalni tisk"}
      breadcrumbSubtitle={"Storitve"}
    >
      <ServiceLayout>
        <div className="td-service-details-wrap">
          <div className="td-service-details-thumb mb-60">
            <img className="w-100" src={thumb} alt="Digitalni tisk" />
          </div>

          <div className="td-service-details-content mb-60">
            <h3 className="td-service-details-title mb-25">Digitalni tisk</h3>

            <p>
              Digitalno tiskanje je trenutno najmodernejša in najhitrejša oblika
              izdelave različnih večbarvnih tiskovin. Je ena izmed najugodnejših oblik
              tiskanja za manjše naklade (do 500 kosov), v primeru večjih naklad pa je
              primernejši offset tisk. Pri digitalnem tisku odpade čas in
              strošek priprave (filmi, offset plošče, …) saj se pričetek dela izvede
              neposredno iz računalnika oziroma datoteke.
            </p>
            <p>
              S pomočjo naših barvnih tiskalnikov lahko tiskamo na različne materiale
              (papir, karton, samolepilna folija, PVC transparenti in ceradna platna, …).
              Nova pridobitev v našem podjetju in hkrati posebnost na trgu je tisk laka,
              zlate, srebrne, bele in metalik barve v digitalni tehnologiji.
            </p>
            <p>
              Primerno za tisk vseh vrst letakov, brošur, vizitk, zgibank, dopisnih
              listov, cenikov, vabil, priznanj in še mnogo več. Format do 330x1200mm,
              cenovno ugoden pri manjših nakladah in hitrejša izdelava tiskovin.
            </p>
          </div>

          <div className="td-service-details-pogress-wrap mb-45">
            <div className="row">
              {/* circular progress */}
              <ServiceDetailsCircularProgress />

              {/* accordion */}
              <ServiceDetailsAccordion />
            </div>
          </div>

          {/* content */}
          <div className="td-service-details-content">
            <p>
              Z najmodernejšo tehnološko opremo in visoko usposobljenimi zaposlenimi
              ponujamo celoten spekter tiskarskih in grafičnih storitev na enem mestu.
              Tiskamo na različne materiale (folija, papir, pleksi, steklo, les,
              blago, …) z različnimi tehnikami.
            </p>
            <p>
              V želji, da našim naročnikom ponudimo celovit paket storitev, smo v naš
              sklop storitev dodali tudi grafično oblikovanje. V primeru, da želite
              tiskovine in še nimate grafične oblike ali potrebujete kakšen drug
              nasvet ali informacijo, vam bo na pomoč priskočila naša ekipa.
            </p>
          </div>
        </div>
      </ServiceLayout>
    </Layout>
  );
};

import React, { useEffect } from "react";
import { Banner } from "../Components/Banner/Banner.jsx";
import { InfoSection } from "../Components/InfoSection/InfoSection.jsx";

function about() {
  const reveal = React.useRef(null);

  useEffect(() => {
    async function animate() {
      if (reveal.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(reveal.current, {
          origin: "top",
          distance: "-30px",
          delay: 50,
        });
      }
    }
    animate();
  }, []);
  return (
    <>
      <Banner
        title={"من نحن"}
        description={
          "نحن متخصصون في تصميم النماذج ثلاثية الأبعاد والمقاولات وغيرها من الخدمات ذات الصلة"
        }
        prev={"الرئيسية"}
        current={"من نحن"}
      />
      ;
      <InfoSection
        ref={reveal}
        title={"من نحن"}
        description={`نحـن مكتـب النخبـة للإستشـارات الهندسـية والمقـاولات، فرضنـا
            أنفسـنا على السـاحة رغـم قـوة التنافـس بالسـوق السـعودي فـي وجـود
            شـركات عالميـة ومحليـة. وخـلال وقـت قصير أصبحنا من أفضـل المكاتب
            الناشـئة بفضل اللـه ثـم ثقة عملائنا.`}
        imageURL={"/test.jpg"}
        icon={"fa-regular fa-question"}
        dir={true}
      />
      <InfoSection
        title={"رسالتنـا"}
        description={`نسعى للريادة في قطـاع الاستشارات الهندسية من خلال تقديم خدمـات مميزة لعملائنا وجعـل رضاهـم نصـب أعيننا ومن أجل ذلك حرصنا على استقطاب أفضل الخبرات في مختلف المجالات الهندسية حيث إنها ركيزة الإبداع الأساسية`}
        imageURL={"/test.jpg"}
        icon={"fa-regular fa-comment"}
      />
      <InfoSection
        title={"رؤيتنا"}
        description={`أن نكـون الرائديـن فـي فـن العمـارة العالمـي، بخطـى ثابتة وكـوادر متميزة تحت رؤية موحدة تسعى للنهوض بالعمارة إلى أرقى المستويات`}
        imageURL={"/test.jpg"}
        dir={true}
        icon={"fa-solid fa-eye-low-vision"}
      />
    </>
  );
}

export default about;

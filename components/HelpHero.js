import { staticImage } from "../lib/assets";

export default function HelpHero() {
  return (
    <>
      <div className="">
        <img
          src={staticImage("BCancer.jpg")}
          alt="help other hero image, Breast Cancer"
          className="w-full h-1/15"
        />
      </div>

      <div className="bg-gray-50 mt-11">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Breast Cancer</span>
            <span className="block text-pink-600 font-semibold">
              <p className="pt-10 text-xl font-sans">
                Breast cancer arises in the lining cells (epithelium) of the
                ducts (85%) or lobules (15%) in the glandular tissue of the
                breast. Initially, the cancerous growth is confined to the duct
                or lobule (“in situ”) where it generally causes no symptoms and
                has minimal potential for spread (metastasis), There are
                different kinds of breast cancer. The kind of breast cancer
                depends on which cells in the breast turn into cancer.
              </p>
              <p className="pt-10 text-xl font-sans">
                In 2020, there were 2.3 million women diagnosed with breast
                cancer and 685 000 deaths globally. As of the end of 2020, there
                were 7.8 million women alive who were diagnosed with breast
                cancer in the past 5 years, making it the world’s most prevalent
                cancer. There are more lost disability-adjusted life years
                (DALYs) by women to breast cancer globally than any other type
                of cancer. Breast cancer occurs in every country of the world in
                women at any age after puberty but with increasing rates in
                later life.
              </p>
              <p className="pt-10 text-xl font-sans">
                Help others by filling the form bellow and share your medical
                test results for Breast Cancer, and contribute to enrich the
                database which will help many others in providing an accurate
                medical prediction for their status.
              </p>
            </span>
          </h2>
        </div>
        <div className="pt-10 pl-9 pb-11 text-xl">
          <h4 className="font-bold text-xl font-serif">Useful links</h4>
          <a
            href="https://www.breastcancer.org/"
            className="text-blue-600 visited:text-purple-600 ..."
          >
            Breast Cancer Organization
          </a>
          <br></br>
          <a
            href="https://www.who.int/news-room/fact-sheets/detail/breast-cancer"
            className="text-blue-600 visited:text-purple-600 ..."
          >
            World Health Organization
          </a>
        </div>
      </div>
    </>
  );
}

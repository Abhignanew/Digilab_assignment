'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Card from '@/components/common/Card';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      {/* Hero Section */}
      <section className="bg-blue-600 pt-24 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 z-10">
              <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
                Your Supercharged Design Workflow.
              </h1>
              <p className="text-lg text-blue-300 mb-8 max-w-lg">
                We've been told it is not possible to overachieve our customers' expectations. We have not reinvented the wheel, we decided to build upon it.
              </p>
              <Button className="bg-blue-500 text-white font-semibold mb-12">
                Send Notification
              </Button>
              <div>
                <p className="text-sm font-medium text-white mb-4">Who supports us</p>
                <div className="flex flex-wrap gap-6">
                  <Image src="/images/img_company_logo.svg" alt="Partner Logo" width={112} height={28} />
                  <Image src="/images/img_company_logo_white_a700.svg" alt="Partner Logo" width={112} height={28} />
                  <Image src="/images/img_company_logo_white_a700_28x112.svg" alt="Partner Logo" width={112} height={28} />
                  <Image src="/images/img_company_logo_28x112.svg" alt="Partner Logo" width={112} height={28} />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative">
                <div className="bg-blue-600 w-full h-full absolute top-0 left-0 z-0"></div>
                <div className="relative z-10">
                  <Image 
                    src="/images/img_rectangle_34624127.png" 
                    alt="Person using Lookscout" 
                    width={224} 
                    height={224}
                    className="rounded-tl-full rounded-bl-full rounded-br-full absolute top-32 left-32 z-20"
                  />
                  <div className="bg-white rounded-full w-28 h-28 absolute top-16 left-16 z-10"></div>
                  <div className="border-2 border-white rounded-full w-28 h-28 absolute top-80 left-16 z-10 flex items-center justify-center">
                    <div className="bg-blue-300 rounded-full w-14 h-14"></div>
                  </div>
                  <Image src="/images/img_elem_1.svg" alt="Element 1" width={224} height={112} className="absolute top-8 left-32" />
                  <Image src="/images/img_elem_2.svg" alt="Element 2" width={112} height={112} className="absolute top-8 left-64" />
                  <Image src="/images/img_elem_3.svg" alt="Element 3" width={112} height={224} className="absolute top-32 left-64" />
                  <Image src="/images/img_elem_4.svg" alt="Element 4" width={112} height={224} className="absolute top-80 left-64" />
                  <Image src="/images/img_elem_5.svg" alt="Element 5" width={224} height={112} className="absolute top-96 left-32" />
                  <Image src="/images/img_elem_7.svg" alt="Element 7" width={112} height={224} className="absolute top-48 left-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Messaging for all</h2>
            <p className="text-base text-gray-700 max-w-2xl mx-auto">
              User generated content in real-time will have multiple touchpoints for offshoring.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card
              icon="/images/img_icon.svg"
              title="Easier Work Organization"
              description="Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas."
              link={{ text: "Learn more", url: "#" }}
            />
            {/* Feature 2 */}
            <Card
              icon="/images/img_icon_white_a700.svg"
              title="Fast Connection"
              description="Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals."
              link={{ text: "Learn more", url: "#" }}
            />
            {/* Feature 3 */}
            <Card
              icon="/images/img_icon_white_a700_32x32.svg"
              title="Streamlined Processes"
              description="Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible."
              link={{ text: "Learn more", url: "#" }}
            />
            {/* Feature 4 */}
            <Card
              icon="/images/img_icon_32x32.svg"
              title="Easier Integrations"
              description="Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information."
              link={{ text: "Learn more", url: "#" }}
            />
            {/* Feature 5 */}
            <Card
              icon="/images/img_icon_1.svg"
              title="Marketing Analytics"
              description="Phosfluorescently engage worldwide methodologies with web-enabled Interactively coordinate."
              link={{ text: "Learn more", url: "#" }}
            />
            {/* Feature 6 */}
            <Card
              icon="/images/img_icon_2.svg"
              title="Workflow Builder"
              description="Collaboratively administrate turnkey service channels whereas virtual e-tailers. This is objectively scalable metrics whereas."
              link={{ text: "Learn more", url: "#" }}
            />
          </div>
        </div>
      </section>
      {/* Product Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Redefining Product Features</h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="space-y-12">
                <div className="flex">
                  <div className="mr-6">
                    <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center">
                      <Image src="/images/img_icon_3.svg" alt="Explore" width={32} height={32} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Explore ideas together</h3>
                    <p className="text-base text-gray-700 mb-3">
                      Engage audience segments and finally create actionable insights. Amplify vertical integration.
                    </p>
                    <Link href="#" className="text-blue-500 font-semibold text-sm flex items-center">
                      Learn more
                      <Image src="/images/img_arrow_right.svg" alt="Arrow Right" width={20} height={20} className="ml-2" />
                    </Link>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-6">
                    <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center">
                      <Image src="/images/img_icon_4.svg" alt="Ideas" width={32} height={32} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Bring those ideas to life</h3>
                    <p className="text-base text-gray-700 mb-3">
                      Engage audience segments and finally create actionable insights. Amplify vertical integration.
                    </p>
                    <Link href="#" className="text-blue-500 font-semibold text-sm flex items-center">
                      Learn more
                      <Image src="/images/img_arrow_right.svg" alt="Arrow Right" width={20} height={20} className="ml-2" />
                    </Link>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-6">
                    <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center">
                      <Image src="/images/img_icon_5.svg" alt="Outcomes" width={32} height={32} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Ship better outcomes</h3>
                    <p className="text-base text-gray-700 mb-3">
                      Engage audience segments and finally create actionable insights. Amplify vertical integration.
                    </p>
                    <Link href="#" className="text-blue-500 font-semibold text-sm flex items-center">
                      Learn more
                      <Image src="/images/img_arrow_right.svg" alt="Arrow Right" width={20} height={20} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image 
                src="/images/img_photo.png" 
                alt="Product Features" 
                width={560} 
                height={560} 
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Dark Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <Image 
                src="/images/img_photo_560x560.png" 
                alt="Product Features" 
                width={560} 
                height={560} 
                className="rounded-lg"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-16">
              <div className="space-y-12">
                <div className="flex">
                  <div className="mr-6">
                    <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center">
                      <Image src="/images/img_icon_3.svg" alt="Explore" width={32} height={32} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Explore ideas together</h3>
                    <p className="text-base text-gray-500 mb-3">
                      Engage audience segments and finally create actionable insights. Amplify vertical integration.
                    </p>
                    <Link href="#" className="text-blue-500 font-semibold text-sm flex items-center">
                      Learn more
                      <Image src="/images/img_arrow_right.svg" alt="Arrow Right" width={20} height={20} className="ml-2" />
                    </Link>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-6">
                    <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center">
                      <Image src="/images/img_icon_4.svg" alt="Ideas" width={32} height={32} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Bring those ideas to life</h3>
                    <p className="text-base text-gray-500 mb-3">
                      Engage audience segments and finally create actionable insights. Amplify vertical integration.
                    </p>
                    <Link href="#" className="text-blue-500 font-semibold text-sm flex items-center">
                      Learn more
                      <Image src="/images/img_arrow_right.svg" alt="Arrow Right" width={20} height={20} className="ml-2" />
                    </Link>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-6">
                    <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center">
                      <Image src="/images/img_icon_5.svg" alt="Outcomes" width={32} height={32} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Ship better outcomes</h3>
                    <p className="text-base text-gray-500 mb-3">
                      Engage audience segments and finally create actionable insights. Amplify vertical integration.
                    </p>
                    <Link href="#" className="text-blue-500 font-semibold text-sm flex items-center">
                      Learn more
                      <Image src="/images/img_arrow_right.svg" alt="Arrow Right" width={20} height={20} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-100 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Image 
                src="/images/img_company_logo_blue_gray_900_01.svg" 
                alt="Company Logo" 
                width={128} 
                height={32} 
              />
            </div>
            <blockquote className="text-2xl font-medium text-gray-800 text-center mb-8 max-w-3xl mx-auto">
              Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I can't say enough about LookScout. Great job, I will definitely be ordering again!
            </blockquote>
            <div className="flex items-center justify-center">
              <Image 
                src="/images/img_avatar.png" 
                alt="Lisa Smith" 
                width={40} 
                height={40} 
                className="rounded-full mr-3"
              />
              <div>
                <p className="font-medium text-gray-800">Lisa Smith</p>
                <p className="text-sm text-gray-700">CEO Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Blog Posts</h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="flex flex-col">
              <Image 
                src="/images/img_rectangle_1.png" 
                alt="Blog Post" 
                width={384} 
                height={300} 
                className="rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4 leading-tight">
                Organize your digital assets with a new methodology here.
              </h3>
              <p className="text-base text-gray-700 mb-6">
                Podcasting operational management inside of workflows to establish a framework seamless.
                Convergence collaboratively.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <div className="flex items-center">
                  <Image 
                    src="/images/img_avatar_40x40.png" 
                    alt="Andrew Miller" 
                    width={40} 
                    height={40} 
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium text-gray-800 text-sm">Andrew Miller</p>
                    <p className="text-sm text-gray-700">CEO</p>
                  </div>
                </div>
                <span className="text-sm text-gray-700">25 Apr</span>
              </div>
            </div>
            {/* Blog Post 2 */}
            <div className="flex flex-col">
              <Image 
                src="/images/img_rectangle_1_300x384.png" 
                alt="Blog Post" 
                width={384} 
                height={300} 
                className="rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4 leading-tight">
                Organize your digital assets with a new methodology here.
              </h3>
              <p className="text-base text-gray-700 mb-6">
                Keeping your eye while performing a deep dive on the start-up mentality to derive convergence collaboratively.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <div className="flex items-center">
                  <Image 
                    src="/images/img_avatar_1.png" 
                    alt="David Munsan" 
                    width={40} 
                    height={40} 
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium text-gray-800 text-sm">David Munsan</p>
                    <p className="text-sm text-gray-700">UX</p>
                  </div>
                </div>
                <span className="text-sm text-gray-700">25 Apr</span>
              </div>
            </div>
            {/* Blog Post 3 */}
            <div className="flex flex-col">
              <Image 
                src="/images/img_rectangle_1_1.png" 
                alt="Blog Post" 
                width={384} 
                height={300} 
                className="rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4 leading-tight">
                Organize your digital assets with a new methodology here.
              </h3>
              <p className="text-base text-gray-700 mb-6">
                Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <div className="flex items-center">
                  <Image 
                    src="/images/img_avatar_2.png" 
                    alt="Andrew Meller" 
                    width={40} 
                    height={40} 
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium text-gray-800 text-sm">Andrew Meller</p>
                    <p className="text-sm text-gray-700">UI</p>
                  </div>
                </div>
                <span className="text-sm text-gray-700">25 Apr</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Clients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Proud to Be Used By</h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Image src="/images/img_press_logo.svg" alt="Client Logo" width={128} height={32} />
            <Image src="/images/img_company_logo_yellow_800.svg" alt="Client Logo" width={128} height={32} />
            <Image src="/images/img_company_logo_green_500.svg" alt="Client Logo" width={128} height={32} />
            <Image src="/images/img_company_logo_light_blue_600.svg" alt="Client Logo" width={128} height={32} />
            <Image src="/images/img_company_logo_red_a700.svg" alt="Client Logo" width={128} height={32} />
            <Image src="/images/img_company_logo_gray_900_01.svg" alt="Client Logo" width={128} height={32} />
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <span className="text-sm font-semibold text-blue-500 uppercase">1% OF THE INDUSTRY</span>
            <h2 className="text-3xl font-semibold text-gray-800 mt-4 mb-8 max-w-3xl mx-auto leading-tight">
              Welcome to your new digital reality that will rock your world truly at all throughout.
            </h2>
          </div>
          <div className="max-w-xl mx-auto mb-8">
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white border border-gray-400 text-gray-600 py-3 px-4 rounded-l-sm w-full focus:outline-none"
                required
              />
              <Button 
                type="submit" 
                className="bg-blue-500 text-white font-semibold py-3 px-4 rounded-r-sm"
              >
                Submit
              </Button>
            </form>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center mr-2">
                <Image src="/images/img_check.svg" alt="Check" width={12} height={12} />
              </div>
              <span className="text-base font-medium text-gray-800">Fully Secure</span>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center mr-2">
                <Image src="/images/img_check.svg" alt="Check" width={12} height={12} />
              </div>
              <span className="text-base font-medium text-gray-800">24/7 Support</span>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center mr-2">
                <Image src="/images/img_check.svg" alt="Check" width={12} height={12} />
              </div>
              <span className="text-base font-medium text-gray-800">Done Deal</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
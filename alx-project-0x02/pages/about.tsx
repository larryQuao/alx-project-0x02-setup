import Header from "@/components/layout/Header";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <div className=" flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">This is the about page of our Next.js application.</p>
      </div>
    </>
  );
}

export default About;

import Form from "@/components/Login-Page/Form";

export default function Home() {
  return (
    <div className="bg-image min-h-screen min-w-full flex justify-center items-center">
      <div className="card bg-base-100 shadow-xl wd-[90%] md:w-2/3 lg:w-2/5 rounded-lg">
        <div className="card-body">
          <Form/>
        </div>
      </div>
    </div>
  );
}

// app/auth/admin-login/page.jsx
"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/shared/buttons/button/Button";

const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (res?.error) {
      setError("Invalid credentials");
    } else {
      router.push("/admin");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center px-4">
      <div className="bg-slate-100 p-2 rounded-lg shadow-lg border border-gray-200">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
          {/* Image */}
          <div
            className="md:aspect-square flex items-center
            rounded-lg justify-center p-8 md:p-4"
          >
            <img
              src={`/hospital/logo/default.png`}
              alt="ArogyaHospitals.png"
              width={100}
              height={100}
              className="w-[250px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center bg-white rounded-lg space-y-6 p-6">
            <span className="text-4xl font-bold text-[#0560D9] uppercase">
              Log-In
            </span>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 w-full"
            >
              <input
                required
                maxLength={50}
                type="text"
                className="bg-slate-100 rounded-md outline-none w-full px-2 py-2 border border-gray-300"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                required
                maxLength={100}
                type="password"
                className="bg-slate-100 rounded-md outline-none w-full px-2 py-2 border border-gray-300"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-red-500">{error}</p>}
              <div className="flex gap-2">
                <Button
                  title={"Home"}
                  pd={"px-4 py-2"}
                  bg={"bg-[#4CB847] text-white hover:bg-green-600"}
                  click={() => {
                    router.push("/");
                  }}
                />
                <button type="submit" className="w-full">
                  <Button title={"Login"} fw={true} pd={"px-4 py-2"} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;

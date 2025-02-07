import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyEmailPage = () => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [message, setMessage] = useState("");

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const userId = localStorage.getItem("userId"); // Retrieve user ID from local storage

  if (!userId) {
    return <div>You need to register first.</div>;
  }

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post<{ message: string }>("/api/auth/verify-email", {
        userId,
        code: verificationCode,
      });

      setMessage(response.data.message);
      alert("Email verified successfully!");
      navigate("/"); // Redirect after successful verification
    } catch (err: any) {
      setError(err.response?.data?.error || "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  const handleResendVerification = async () => {
    setError("");
    setResendLoading(true);

    try {
      const response = await api.post<{ message: string }>("/api/auth/resend-verification", {
        userId,
      });

      setMessage(response.data.message);
      alert("Verification code resent!");
    } catch (err: any) {
      setError(err.response?.data?.error || "Resend failed");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="verify-email-page">
      <h2>Verify Your Email</h2>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleVerify}>
        <div>
          <label>Enter Verification Code:</label>
          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Verifying..." : "Verify Email"}
        </button>
      </form>

      <button onClick={handleResendVerification} disabled={resendLoading}>
        {resendLoading ? "Sending..." : "Resend Verification Code"}
      </button>
    </div>
  );
};

export default VerifyEmailPage;

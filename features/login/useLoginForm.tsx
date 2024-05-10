import { useState } from 'react';

export function useLoginForm(submit: (email: string, password: string) => Promise<void>) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handleSubmit = async () => {
    await submit(email, password);
  };
  const disabled = email === '' || password === '';
  return {
    email,
    password,
    disabled,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit
  };
}

export default useLoginForm;

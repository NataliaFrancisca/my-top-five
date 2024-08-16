'use client';
import Error from '@/app/components/Error/Error';
import { ErrorType } from '@/types/enum';

const ErrorPage = () => {
  return <Error type={ErrorType.error} />;
};

export default ErrorPage;

import * as yup from 'yup';
import type { InferType } from 'yup';
import { genderCode } from './constants';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
export const regFormSchema = yup.object({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  username: yup.string().required('必須項目です'),
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  zipcode: yup.string().max(7).matches(/\d{7}/, '7桁の数字で入力してください'),
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  gender: yup.mixed().oneOf(Object.keys(genderCode)),
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  isAgreed: yup.boolean().oneOf([true], '同意が必要です').required(),
});

export type RegFormSchema = InferType<typeof regFormSchema>;

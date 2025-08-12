import { RequestFunction } from '@kanda-libs/openapi-io-ts-runtime';
import { createPoster } from './helpers';
import { Company } from '../../generated/components/schemas';

const BASE_URL =
  process.env.REACT_APP_FIREBASE_FUNCTION_SERVICE_URL ||
  'https://europe-west1-basic-garden-241310.cloudfunctions.net';

const pdfServicePoster = <T>(
  url: string,
  body: ContractRequestBody,
): RequestFunction<ContractRequestBody, T> =>
  createPoster(BASE_URL)(url, body) as unknown as RequestFunction<
    ContractRequestBody,
    T
  >;

export type PdfComponentType = 'altText' | 'section' | 'bulletList';

export type PdfBulletListType =
  | 'capitalAlpha'
  | 'alpha'
  | 'number'
  | 'dot'
  | 'disc'
  | 'dash'
  | 'roman'
  | 'blank';

export interface PdfComponentSpacerI {
  margin: number;
}

export interface PdfComponentSpacer extends PdfComponentSpacerI {
  type: 'spacer';
  id: string;
}

export interface PdfComponentWhitespaceI {
  height: number;
}

export interface PdfComponentWhitespace extends PdfComponentWhitespaceI {
  type: 'whitespace';
  id: string;
}

export interface PdfComponentSignatureI {
  signee?: string;
  date?: string;
  companyName?: string;
  title?: string;
  fingerprint?: string;
}

export interface PdfComponentSignature extends PdfComponentSignatureI {
  type: 'signature';
  id: string;
}

export interface PdfComponentAltTextI {
  content: string[];
  boldFirst?: boolean;
}

export interface PdfComponentAltText extends PdfComponentAltTextI {
  type: 'altText';
  id: string;
}

export interface PdfComponentBulletListContent {
  copy: string | PdfComponentAltText;
  sublist?: PdfComponentBulletListI;
  subcopy?: string | PdfComponentAltText;
}

export interface PdfComponentBulletListI {
  bulletType: PdfBulletListType;
  content: PdfComponentBulletListContent[];
  prefix?: string;
}

export interface PdfComponentBulletList extends PdfComponentBulletListI {
  type: 'bulletList';
  id: string;
}

export interface PdfComponentSectionI {
  title: string;
  content: (PdfComponentBulletList | PdfComponentAltText)[];
}

export interface PdfComponentSection extends PdfComponentSectionI {
  type: 'section';
  id: string;
}

export interface PdfComponentHeadingI {
  title: string;
  alignment?: 'left' | 'right' | 'center';
}

export interface PdfComponentHeading extends PdfComponentHeadingI {
  type: 'heading';
  id: string;
}

export type PdfComponent =
  | PdfComponentSection
  | PdfComponentBulletList
  | PdfComponentAltText
  | PdfComponentSignature
  | PdfComponentWhitespace
  | PdfComponentSpacer
  | PdfComponentHeading;

export interface ContractRequestBodyBody {
  currentDate: string;
  fingerprint?: string;
  companyName?: string;
  companyAddress?: string;
  companyIdentifier?: string;
  companyType?: Company['company_type'];
  signee?: string;
  signeeEmail?: string;
}

export interface ContractRequestBody {
  body: ContractRequestBodyBody;
}

export interface ContractPdfResponse {
  base64: string;
}

export interface ContractTermsResponse {
  contract: PdfComponent[];
}

export default {
  contractpdf: {
    key: '/generate-contract-v2-pdf',
    method: ({
      body,
    }): RequestFunction<ContractRequestBody, ContractPdfResponse> =>
      pdfServicePoster(`/kspdf-contract-v2-pdf`, body),
  },
  contractterms: {
    key: '/generate-contract-v2-terms',
    method: ({
      body,
    }): RequestFunction<ContractRequestBody, ContractTermsResponse> =>
      pdfServicePoster(`/kspdf-contract-v2-terms`, body),
  },
};

interface TokenUriResponse {
  attributes: Attribute[];
  description: string;
  external_url: string;
  image: string;
  animation_url: string;
  name: string;
}

interface Attribute {
  trait_type: string;
  value: number | string;
  display_type?: string;
  max_value?: number;
}

import React from "react";

export interface InputFormProps {
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ListContainerProps {
  className?: string;
}

export interface SearchCountryProps {
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

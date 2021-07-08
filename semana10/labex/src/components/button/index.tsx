import { ButtonHTMLAttributes } from "react";
import './styles.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonPrimary = (props: ButtonProps) => {
  return (
    <button className='button-primary' {...props}/>
  );
}

export const ButtonSuccess = (props: ButtonProps) => {
  return (
    <button className='button-success' {...props}/>
  );
}

export const ButtonDenied = (props: ButtonProps) => {
  return (
    <button className='button-denied' {...props}/>
  );
}
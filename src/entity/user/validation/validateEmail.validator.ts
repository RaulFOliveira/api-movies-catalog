import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/service/user.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class validateEmail implements ValidatorConstraintInterface {
  constructor(private userService: UserService) {}

  async validate(
    value: string,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const userWithEmailExists = await this.userService.existsEmail(value);
    return !userWithEmailExists;
  }
}

export const EmailAlreadyExists = (optionsValidation: ValidationOptions) => {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: optionsValidation,
      constraints: [],
      validator: validateEmail,
    });
  };
};

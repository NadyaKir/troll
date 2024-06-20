import {
	IsOptional,
	IsNumber,
	Min,
	Max,
	IsEmail,
	MinLength,
	IsString
} from 'class-validator'
export class PomodoroSetingsDto {
	@IsOptional()
	@IsNumber()
	@Min(1)
	workInterval?: number

	@IsOptional()
	@IsNumber()
	@Min(1)
	breakInterval?: number

	@IsOptional()
	@IsNumber()
	@Min(1)
	@Max(10)
	intervalsCount?: number
}

export class UserDto extends PomodoroSetingsDto {
	@IsEmail()
	@IsOptional()
	email: string

	@IsOptional()
	@IsString()
	name?: string

	@IsOptional()
	@MinLength(6, {
		message: 'Password must be at least 6 characters long'
	})
	@IsString()
	password: string
}

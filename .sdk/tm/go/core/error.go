package core

type UnirateError struct {
	IsUnirateError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewUnirateError(code string, msg string, ctx *Context) *UnirateError {
	return &UnirateError{
		IsUnirateError: true,
		Sdk:              "Unirate",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *UnirateError) Error() string {
	return e.Msg
}

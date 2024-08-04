export default class CustomResponseDto<T> {

    IsSuccess?: boolean;
    Content?: T;
    ErrorMessage?: string
    constructor(model?: T, isSuccess?: boolean, errorMessage?: string) {
        this.IsSuccess = isSuccess;
        this.Content = model;
        this.ErrorMessage = errorMessage;
    }

    Fail() {
        return new CustomResponseDto(this.Content, false, this.ErrorMessage);
    }

    Success() {
        return new CustomResponseDto(this.Content, true);
    }

}
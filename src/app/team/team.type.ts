export interface Team
{
  familyName: string;
  firstName: string;
  dateOfBirth: string;
  gender: string;
  profileImage: string;
  role: string;
  photoPresent?: string;
}

export interface TeamPagination
{
  length: number;
  size: number;
  page: number;
  lastPage: number;
  startIndex: number;
  endIndex: number;
}

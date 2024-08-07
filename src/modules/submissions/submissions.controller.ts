import { Controller, Get, Param } from '@nestjs/common';
import { SubmissionsService } from './submissions.service';
import { GetSubmissionsByAssignmentDto } from './dto/get-submissions-by-assignment.dto';
import { GetSubmissionDto } from './dto/get-submission';

@Controller('submission')
export class SubmissionsController {
  constructor(private readonly submissionService: SubmissionsService) {}

  @Get('/by-assignments/:assignment_uid')
  getSubmissionsByAssignment(
    @Param() { assignment_uid }: GetSubmissionsByAssignmentDto,
  ) {
    return this.submissionService.getSubmissionsByAssignment(assignment_uid);
  }

  @Get('/:uid')
  getSubmission(@Param() { uid }: GetSubmissionDto) {
    return this.submissionService.getSubmission(uid);
  }
}

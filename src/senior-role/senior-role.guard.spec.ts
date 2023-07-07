import { SeniorRoleGuard } from './senior-role.guard';

describe('SeniorRoleGuard', () => {
  it('should be defined', () => {
    expect(new SeniorRoleGuard()).toBeDefined();
  });
});

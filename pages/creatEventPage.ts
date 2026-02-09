import {Locator , Page } from '@playwright/test';

const url = "https://educator.dev.enumverse.com/admin/dashboard"
export class CreateEventPage {
    readonly page: Page;
    readonly calenderButton: Locator;
    readonly createEventButton: Locator;
    readonly eventNameInput: Locator;
    readonly eventDescriptionInput: Locator;
    readonly eventDateInput: Locator;
    readonly eventTimeInput: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.calenderButton = page.getByRole('button', { name: 'Calendar' }).getByRole('link');
        this.createEventButton = page.getByRole('button', { name: 'Create event' });
        this.eventNameInput = page.getByPlaceholder('Event Name');
        this.eventDescriptionInput = page.getByPlaceholder('Event Description');
        this.eventDateInput = page.getByPlaceholder('Event Date');
        this.eventTimeInput = page.getByPlaceholder('Event Time');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

}
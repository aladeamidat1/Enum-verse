import {Locator , Page } from '@playwright/test';

const url = "https://educator.dev.enumverse.com/admin/dashboard"
export class CreateEventPage {
    readonly page: Page;
    readonly calenderButton: Locator;
    readonly createEventButton: Locator;
    readonly eventNameInput: Locator;
    readonly eventVisibilityDropdown: Locator;
    readonly eventVisibilityPrivate: Locator;
    readonly eventVisibilityPublic: Locator;
    readonly categoryMenuInput: Locator;
    readonly eventDescriptionInput: Locator;
    readonly eventStartDateInput: Locator;
    readonly eventStartTimeInput: Locator;
    readonly eventEndDateInput: Locator;
    readonly eventEndTimeInput: Locator;
    readonly eventLocationInput: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.calenderButton = page.getByRole('button', { name: 'Calendar' }).getByRole('link');
        this.createEventButton = page.getByRole('button', { name: 'Create event' });
        this.eventNameInput = page.getByRole('textbox', { name: 'Enter event name' });
        this.eventVisibilityDropdown = page.getByRole('combobox').filter({ hasText: 'Private' });
        this.eventVisibilityPrivate = page.getByRole('option', { name: 'Private' });
        this.eventVisibilityPublic = page.getByRole('option', { name: 'Public' });
        this.categoryMenuInput = page.getByRole('combobox').filter({ hasText: 'Select a category' })
        this.eventDescriptionInput = page.getByPlaceholder('Event Description');
        this.eventStartDateInput = page.getByPlaceholder('Event Start Date');
        this.eventStartTimeInput = page.getByPlaceholder('Event Start Time');
        this.eventEndDateInput = page.getByPlaceholder('Event End Date');
        this.eventEndTimeInput = page.getByPlaceholder('Event End Time');
        this.eventLocationInput = page.getByPlaceholder('Event Location');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }


    async goto(){
        await this.page.goto(url);
    }

    async openCalender() {
        await this.calenderButton.click();
    }

    async openCreateEvent() {
        await this.createEventButton.click();
    }

    async enterEventName(eventName: string){
        await this.eventNameInput.fill(eventName);
    }

   async selectEventVisibilityPrivate() {
    await this.eventVisibilityDropdown.click();
    await this.eventVisibilityPrivate.click();
  }

   async selectEventVisibilityPublic() {
    await this.eventVisibilityDropdown.click();
    await this.eventVisibilityPublic.click();
  }
    async selectEventCategory(category: string){
        await this.categoryMenuInput.selectOption(category);
    }

    async enterEventDescription(description: string){
        await this.eventDescriptionInput.fill(description);
    }

    async enterEventStartDate(startDate: string){
        await this.eventStartDateInput.fill(startDate);
    }
    async enterEventStartTime(startTime: string){
        await this.eventStartTimeInput.fill(startTime);
    }
    async enterEventEndDate(endDate: string){
        await this.eventEndDateInput.fill(endDate);
    }
    async enterEventEndTime(endTime: string){
        await this.eventEndTimeInput.fill(endTime);
    }
    async enterEventLocation(location: string){
        await this.eventLocationInput.fill(location);
    }

    async submit(){
        await this.submitButton.click();
    }


        


}